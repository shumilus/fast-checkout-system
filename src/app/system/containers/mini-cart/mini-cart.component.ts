import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniCartComponent implements OnInit {
  count = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
