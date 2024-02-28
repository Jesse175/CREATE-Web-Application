import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email = new FormControl('', [Validators.email, Validators.required]);
  public password = new FormControl('', [Validators.required]);

  constructor(public userService: UserService) {}

  public async loginUser(loginData: any): Promise<any> {
    return await this.userService.LoginUser(loginData);
  }

}
