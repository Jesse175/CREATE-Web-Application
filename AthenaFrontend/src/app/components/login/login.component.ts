import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  // public login = new FormGroup({
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   password: new FormControl('', Validators.required)
  // });

  // constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  //   this.router.events.subscribe();
  //   if(this.userService.isLoggedIn){
  //     this.router.navigate(['/register']);
  //   }
  // }

  // public checkEmail(): void 
  // {
  //   let result = '';
  //   const el = document.querySelectorAll('.error')[0] as HTMLElement;
  //   if(this.login.value.email != null && this.login.get('email')?.valid)
  //   {
  //     this.userService.CheckEmail(this.login.value.email).then(data => {
  //       if (!data)
  //       {
  //         result = '<i class="bi bi-exclamation-circle-fill"></i> This email is not currently in use. Please make sure your entry was correct or register for a new account.';
  //         el.style.display = 'block';
  //         el.style.color = 'var(--red1)';
  //         this.login.controls.email.setErrors({'incorrect': true});
  //         el.innerHTML = result;
  //       }
  //       else
  //       {
  //         el.style.display = 'none';
  //         el.innerHTML = '';
  //       }
  //     }); 
  //   }
  //   else
  //   {
  //     el.style.display = 'none';
  //     el.innerHTML = '';
  //   }
  // }

  // public loginUser(): Promise<any> {
  //   let result = '';
  //   const el = document.querySelectorAll('.error')[1] as HTMLElement;
  //   return new Promise(resolve => {
  //     if(this.login.valid){
  //       var loginData = {
  //         Email: this.login.value.email,
  //         Password: this.login.value.password,
  //       };
  //       this.userService.CheckLogin(loginData).then(data => {
  //         if(data){
  //           this.userService.Login();
  //           if (this.userService.isLoggedIn) {
  //             var authUser = new User(data);
  //             sessionStorage.clear();
  //             sessionStorage.setItem('isLoggedIn', 'true');
  //             sessionStorage.setItem('auth', authUser.UserID?.toString());

  //             const redirectUrl = this.userService.redirectUrl;

  //             // Redirect the user
  //             this.router.navigate([redirectUrl]);
  //             resolve(true);
  //           } else {
  //             sessionStorage.clear();
  //             resolve(false);
  //           }
  //         } else {
  //           result = '<i class="bi bi-exclamation-circle-fill"></i> Incorrect login credentials. Please refresh the page and try again.';
  //           el.style.display = 'block';
  //           el.innerHTML = result;
  //           resolve(false);
  //         }
  //       });
  //     } else {
  //       result = '<i class="bi bi-exclamation-circle-fill"></i> Incorrect login credentials. Please refresh the page and try again.';
  //       el.style.display = 'block';
  //       el.innerHTML = result;
  //       resolve(false);
  //     }
  //   })
  // }

}
