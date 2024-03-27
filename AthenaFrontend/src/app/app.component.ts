import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { AuthToken } from 'src/models/authtoken.model';
import { Router } from '@angular/router';
import { Student } from 'src/models/student.model';
import { Mentor } from 'src/models/mentor.model';
import { MentorService } from './services/mentor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CREATE';
  public role: any;
  protected auth: any;

  constructor(private authService: AuthService, public router: Router, public mentorService: MentorService){
    this.router.navigate(['/modules']);
  }

  private async getAuthentication(): Promise<AuthToken> {
    return await this.authService.getAuthentication();
  }

  public async getMentorStudentsNum(id: string): Promise<number> {
    const studentNum: number = await this.mentorService.GetMentorStudents(id);
    return studentNum;
  }

  public async ngOnInit(): Promise<void> {
    if (this.authService.token != undefined && this.authService.token != null && this.authService.token != ''){
      const authResponse = await this.authService.isAuthenticated();
      if (authResponse){
        const response = await this.getAuthentication();
        this.auth = new AuthToken(response);
        this.role = this.auth.Role;
        if (this.role.Name == 'Student'){
          this.role.Person = new Student(this.role.Person);
        } else if (this.role.Name == 'Mentor'){
          this.role.Person = new Mentor(this.role.Person);
        }

      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  // ensures that the role is set to null on logout
  // this prevents the sidebar from appearing on login page
  logout() {
    this.role = null;
    localStorage.removeItem('token');
  }

}
