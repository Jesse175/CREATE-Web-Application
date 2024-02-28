import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: any;
  private postHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public CheckEmail(email: string): Promise<boolean> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/Users/Email/' + email).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }

  public LoginUser(loginData: any): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Users/Login', JSON.stringify(loginData), { headers: this.postHeaders }).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }
}
