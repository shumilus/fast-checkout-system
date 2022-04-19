import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PersonalInfo, Product, UserCustom } from '../../../shared/models';
import { getProductQuantity } from '../../../core/store/cart/cart.selectors';
import { OrdersService, ProductService } from '../../services';
import { getUserState } from '../../../core/store/user/user.selectors';
import { UserState } from '../../../core/store/user/user.reducer';
import { cart, form, personalInformation } from '../../../shared/constants';
import { LocalStorageService } from '../../../shared/services';
import { addProductToCart } from '../../../core/store/cart/cart.actions';
import { setLoading } from '../../../core/store/loader/loader.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  private _productQuantity: number;

  price$: Observable<number>;
  user$: Observable<UserCustom>;

  checkoutForm: FormGroup;
  personalInfo: PersonalInfo;

  constructor(private _productService: ProductService,
              private _localStorageService: LocalStorageService,
              private _router: Router,
              private _orderService: OrdersService,
              private _store: Store) {
  }

  ngOnInit(): void {
    this.price$ = this._productService.getProducts()
      .pipe(
        map((products: Product[]) => products[0]),
        switchMap((product: Product) => this._store.select(getProductQuantity)
          .pipe(
            tap((quantity: number) => this._productQuantity = quantity),
            map((quantity: number) => product.price * quantity)
          )
        )
      );

    this.user$ = this._store.select(getUserState)
      .pipe(
        tap((user: UserState) => {
          this.checkoutForm.controls[form.email].setValue(user.email);
        })
      );

    this._createForm();
    this._initPersonalInformation();
  }

  private _createForm(): void {
    this.checkoutForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      fullName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      creditCardNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(16),
        Validators.pattern('^[0-9 -]+$'),
      ]),
      cvv: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{3}'),
      ]),
    });
  }

  private _initPersonalInformation(): void {
    this.personalInfo = JSON.parse(this._localStorageService.getItem(personalInformation));
  }

  private _clearCart(): void {
    this._store.dispatch(addProductToCart({quantity: 0}));
    this._localStorageService.setItem(cart, JSON.stringify({quantity: 0}));
  }

  onSubmit(): void {
    this.payOrder();
  }

  payOrder(): void {
    const personalInfo = JSON.stringify(this.personalInfo || this.checkoutForm.value);
    this._localStorageService.setItem(personalInformation, personalInfo);

    this._orderService.saveOrder(
      JSON.stringify({
        id: Math.floor((Math.random() * 10000000000) + 1),
        personalInformation: this.personalInfo || this.checkoutForm.value,
        quantity: this._productQuantity,
      })
    )
      .pipe(
        tap(() => this._store.dispatch(setLoading({loading: true}))),
        finalize(() => this._store.dispatch(setLoading({loading: false})))
      )
      .subscribe(() => {
        this._clearCart();
        this._router.navigate(['/confirmation']);
      });
  }
}
