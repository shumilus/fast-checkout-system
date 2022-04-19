import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../authentication/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(private _authService: AuthenticationService,
              private _router: Router) {
  }

  signOut(): void {
    this._authService.signOut()
      .then(() => this._router.navigate(['sign-in']))
      .catch(err => console.log(err));
  }

  back(): void {
    this._router.navigate(['/']);
  }
}
