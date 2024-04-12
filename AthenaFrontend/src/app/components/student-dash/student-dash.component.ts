import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorService } from 'src/app/services/mentor.service';
import { StudentService } from 'src/app/services/student.service';
import { ModuleService } from 'src/app/services/module.service';
import { AddMentorDialog } from 'src/app/components/dashboard/add-mentor-dialog/add-mentor-dialog';
import { Role } from 'src/models/role.model';
import { Mentor } from 'src/models/mentor.model';
import { Student } from 'src/models/student.model';
import { Module } from 'src/models/module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthToken } from 'src/models/authtoken.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent {

  public allModules: Module[] = [];
  public studentModules: Module[] = [];
  public studentMentors: Mentor[] = [];
  public auth: AuthToken;
  public role: Role;

  constructor(public moduleService: ModuleService, public studentService: StudentService, public router: Router) {

    this.getAllModules();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      auth: AuthToken,
      expectedRole: string,
      role: Role
    };
    this.auth = state.auth;
    this.role = state.role;
    this.getStudentMentor(this.role.RoleID)
  }

  public async getAllModules(): Promise<void> {
    this.allModules = [];
    const response = await this.moduleService.GetAllModules();
    for (let mod of response) {
      let module = new Module(mod);
      this.allModules.push(module);
    }
  }
  public async getStudentMentor(id: string): Promise<any> {
    this.studentMentors = [];
    const response = await this.studentService.GetStudentMentors(id);
    if (response) {
      for (let m of response) {
        let mentor = new Mentor(m);
        //let mentor = new Role(m);
        //mentor.Person = new Mentor(m.mentor);
        this.studentMentors.push(mentor);
      }
      this.studentService.emitChange(response.length);
    }
  }
}
