import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserLogin, UserToken } from '../../models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  items = [
    { dataField: 'Username' },
    { dataField: 'Password' },
  ];
  user: UserLogin = { username: 'huy.phan6@qa.team', password: 'vStation@123' };
  constructor(public accountsService: AccountService
    , private router: Router) {
    
    
  }

  login() {
    this.accountsService.login(this.user).pipe(
      map((response: UserToken) => {
        const user = response;
        if (user) {
          localStorage.setItem('accessToken', user.accessToken);
          this.router.navigate([`project`]);
        }
      })
    ).subscribe();
  }
}
