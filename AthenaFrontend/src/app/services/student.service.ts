import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from 'src/models/role.model';

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

  public AddStudentMentor(StudentID: string, Mentor: Role): Promise<any> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/Students/' + StudentID, JSON.stringify(Mentor), { headers: this.postHeaders }).subscribe((data: any) => {
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

  public GetStudentMentors(StudentID: string): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/Students/' + StudentID + '/Mentors').subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(false);
      });
    });
  }
}
