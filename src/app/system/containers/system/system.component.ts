import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemComponent implements OnInit {

  constructor(private _authService: AuthenticationService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this._authService.signOut()
      .then(() => this._router.navigate(['sign-in']))
      .catch(err => console.log(err));
  }
}
