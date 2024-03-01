import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthToken } from 'src/models/authtoken.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email = new FormControl('', [Validators.email, Validators.required]);
  public password = new FormControl('', [Validators.required]);

  constructor(public userService: UserService, public router: Router) {}

  public async login(): Promise<void> {
    if (this.email.valid && this.password.valid){
      const loginData = {
        Email: this.email.value,
        Password: this.password.value
      };
      const response = await this.loginUser(loginData);
      console.log(response);
      if (response != null && response != undefined){
        let token = new AuthToken(response);
        localStorage.setItem('token', token.TokenID);
        this.router.navigate(['']);
        location.reload();
      } else {
        // Define some kind of login error response
      }
    } else {
      // Define some kind of email is invalid/password is invalid response
    }
  }

  public async loginUser(loginData: any): Promise<any> {
    return await this.userService.LoginUser(loginData);
  }

}
