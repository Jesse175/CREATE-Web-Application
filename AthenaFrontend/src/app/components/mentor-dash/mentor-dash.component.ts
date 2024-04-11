import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorService } from 'src/app/services/mentor.service';
import { StudentService } from 'src/app/services/student.service';
import { AddMentorDialog } from 'src/app/components/dashboard/add-mentor-dialog/add-mentor-dialog';
import { Role } from 'src/models/role.model';
import { Mentor } from 'src/models/mentor.model';
import { Student } from 'src/models/student.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthToken } from 'src/models/authtoken.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-dash',
  templateUrl: './mentor-dash.component.html',
  styleUrls: ['./mentor-dash.component.css']
})
export class MentorDashComponent {

  public mentorStudents: Role[] = [];
  public allStudents: Role[] = [];
  public mentor: Role;
  public auth: AuthToken;

  constructor(public dialog: MatDialog, public mentorService: MentorService, public studentService: StudentService, public snackbar: MatSnackBar, public router: Router) {

    this.getAllStudents();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      auth: AuthToken,
      expectedRole: string
    };
    this.auth = state.auth;
    this.mentor = state.auth.Role;
    this.getMentorStudents(this.mentor.RoleID);
  }

  public addMentor(): void {
    const dialogRef = this.dialog.open(AddMentorDialog, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        let mentor = new Role(response);
        mentor.Person = new Mentor(response.mentor);
        this.snackbar.open('Mentor successfully added!', '', { duration: 3000 });
      }
    });
  }

  public async getMentorStudents(id: string): Promise<any> {
    this.mentorStudents = [];
    const response = await this.mentorService.GetMentorStudents(id);
    if (response) {
      for (let s of response) {
        let student = new Role(s);
        student.Person = new Student(s.student);
        this.mentorStudents.push(student);
      }
      this.mentorService.emitChange(response.length);
    }
  }

  public updateMyStudents(update: string) {
    if (update == 'updated') {
      this.getAllStudents();
      this.getMentorStudents(this.mentor.RoleID);
    }
  }

  public async getAllStudents(): Promise<void> {
    this.allStudents = [];
    const response = await this.studentService.GetAllStudents();
    for (let st of response) {
      let s = new Role(st);
      s.Person = new Student(st.student);
      this.allStudents.push(s);
    }
}

}
