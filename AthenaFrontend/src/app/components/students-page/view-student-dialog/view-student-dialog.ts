import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Role } from 'src/models/role.model';
import { MentorService } from 'src/app/services/mentor.service';
import { Mentor } from 'src/models/mentor.model';

export interface StudentData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-view-student-dialog',
  templateUrl: './view-student-dialog.html',
  styleUrls: ['./view-student-dialog.css']
})
export class ViewStudentDialog implements OnInit {
  public student: Role;
  public mentors: Role[] = [];
  public allMentors: Role[] = [];
  public changes: boolean = false;
  public add: boolean = false;
  public mentor = new FormControl('');

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ViewStudentDialog>, public mentorService: MentorService, public studentService: StudentService) {
    this.student = this.data.student;
    this.getStudentMentors(this.student.RoleID);
    this.getAllMentors();
  }

  public addMentor(): void {

  }

  public addView(): void {
    this.add = !this.add;
  }

  public async getAllMentors(): Promise<any> {
    const response = await this.mentorService.GetAllMentors();
    if (response) {
      response.forEach((m: any) => {
        let mentor = new Role(m);
        mentor.Person = new Mentor(m.mentor);
        this.allMentors.push(mentor);
      });
    }
  }

  public async getStudentMentors(StudentID: string): Promise<any> {
    const response = await this.studentService.GetStudentMentors(StudentID);
    if (response){
      response.forEach((m: any) => {
        let mentor = new Role(m);
        mentor.Person = new Mentor(m.mentor);
        this.mentors.push(mentor);
      });
    }
  }

  public async saveChanges(): Promise<any> {
    const changes = {

    };
    //const response = await this.studentService.AddStudentMentor(this.student.RoleID, mentor);
    //this.dialogRef.close(response);
  }

  public async ngOnInit(): Promise<void> {

  }

  public okClose(): void {
    this.dialogRef.close();
  }
}
