import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl: any;
  private postHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public AddStudent(student: any): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Students', JSON.stringify(student), { headers: this.postHeaders }).subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }

  public GetAllStudents(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/Students').subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }
}
