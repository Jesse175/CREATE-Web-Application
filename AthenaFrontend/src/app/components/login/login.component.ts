// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  // constructor(private http: HttpClient) {}

  login() {
    const loginData = {
      Email: this.email,
      Password: this.password
    };

    // Make a POST request to your API for authentication
    // this.http.post<any>('/api/Users/Login', loginData).subscribe(response => {
    //   // Handle the authentication response
    //   console.log(response);
    //   // You may want to store the authentication token or user details in your application
    // });
  }
}
