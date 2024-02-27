import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { AuthToken } from 'src/models/authtoken.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: any;
  public token: any = sessionStorage.getItem('token')?.toString();

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.http.get(this.apiUrl + '/Users/' + this.token).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }

  public getAuthentication(): Promise<AuthToken> {
    return new Promise<AuthToken>(resolve => {
      this.http.get(this.apiUrl + '/Users/' + this.token).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(new AuthToken(null));
      })
    })
  }
}
