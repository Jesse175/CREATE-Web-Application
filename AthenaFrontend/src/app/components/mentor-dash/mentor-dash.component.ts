import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorService } from 'src/app/services/mentor.service';
import { StudentService } from 'src/app/services/student.service';
import { ModuleService } from 'src/app/services/module.service';
import { DailyStandupService } from 'src/app/services/dailyStandup.service';
import { AddMentorDialog } from 'src/app/components/dashboard/add-mentor-dialog/add-mentor-dialog';
import { Role } from 'src/models/role.model';
import { Mentor } from 'src/models/mentor.model';
import { Student } from 'src/models/student.model';
import { Module } from 'src/models/module';
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
  public allModules: Module[] = [];
  public mentor: Role;
  public auth: AuthToken;
  public role: Role;
  public expectedRole: string;

  constructor(public dialog: MatDialog, public mentorService: MentorService, public studentService: StudentService, public dailyStandupService: DailyStandupService, public snackbar: MatSnackBar, public router: Router, public moduleService: ModuleService) {

    this.getAllStudents();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      auth: AuthToken,
      expectedRole: string,
      role: Role
    };
    this.auth = state.auth;
    this.role = state.role;
    this.mentor = state.auth.Role;
    this.expectedRole = state.expectedRole;
    this.getMentorStudents(this.mentor.RoleID);
    this.getAllModules()
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

  public async getAllModules(): Promise<void> {
    this.allModules = [];
    const response = await this.moduleService.GetAllModules();
    for (let mod of response) {
      let module = new Module(mod);
      this.allModules.push(module);
    }
  }

  //Adds a daily standup to all students under logged in mentor
  // functionality is here if we want it. button is commented out
  public async addDailyStandups(): Promise<void> {
    for (const student of this.mentorStudents) {
      const response = await this.dailyStandupService.AddDailyStandup(student);
    }
    this.snackbar.open('Daily Standups successfully added!', '', { duration: 3000 });
  }
}
