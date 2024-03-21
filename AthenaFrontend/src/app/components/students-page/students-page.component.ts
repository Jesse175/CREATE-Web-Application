import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialog } from './add-student-dialog/add-student-dialog';
import { Role } from 'src/models/role.model';
import { Student } from 'src/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  public students: Role[] = [];

  constructor(public dialog: MatDialog, public studentService: StudentService, public snackbar: MatSnackBar) {
    this.getAllStudents();
  }

  public addStudent(): void {
    const dialogRef = this.dialog.open(AddStudentDialog, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response){
        let student = new Role(response);
        student.Person = new Student(response.student);
        this.students.push(student);
        this.snackbar.open('Student successfully added!', '', { duration: 3000 });
      }

    });
  }

  public async getAllStudents(): Promise<void> {
    this.students = [];
    const response = await this.studentService.GetAllStudents();
    for (let st of response){
      let s = new Role(st);
      s.Person = new Student(st.student);
      this.students.push(s);
    }
  }
}
