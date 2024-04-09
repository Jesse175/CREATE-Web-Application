import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorService } from 'src/app/services/mentor.service';
import { AddMentorDialog } from './add-mentor-dialog/add-mentor-dialog';
import { Role } from 'src/models/role.model';
import { Mentor } from 'src/models/mentor.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/models/student.model';
import { Module } from 'src/models/module';
import { StudentService } from 'src/app/services/student.service';
import { ModuleService } from 'src/app/services/module.service';
import { ModuleCardComponent } from 'src/app/components/modules/module-card/module-card.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public role: any;
  public mentorStudents: Role[] = [];
  public mentorModules: Module[] = [];

  constructor(public dialog: MatDialog, public mentorService: MentorService, 
    public studentService: StudentService, public snackbar: MatSnackBar, public moduleService: ModuleService) {

    this.getAllMentorStudents();
    this.getAllModules();

  }

  public addMentor(): void {
    const dialogRef = this.dialog.open(AddMentorDialog, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response){
        let mentor = new Role(response);
        mentor.Person = new Mentor(response.mentor);
        this.snackbar.open('Mentor successfully added!', '', { duration: 3000 } );
      }
    });
  }

  public async getAllMentorStudents(): Promise<void> {
    this.mentorStudents = [];
    const response = await this.studentService.GetAllStudents();
    for (let student of response) {
      let s = new Role(student);
      s.Person = new Student(student.student);
      this.mentorStudents.push(s);
    }
  }

  public async getAllModules(): Promise<void> {
    this.mentorModules = [];
    const response = await this.moduleService.GetAllModules();
    for (let mod of response) {
      let module = new Module(mod);
      this.mentorModules.push(module);
    }
  }

}
