import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/models/role.model';
import { ViewStudentDialog } from '../view-student-dialog/view-student-dialog';
import { Student } from 'src/models/student.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  @Input() students: Role[]= [];

  constructor (public dialog: MatDialog, public snackbar: MatSnackBar) {}

  public viewStudent(student: Role) {
    const dialogRef = this.dialog.open(ViewStudentDialog, {
      panelClass: 'custom-dialog',
      data: {student: student}
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response.edit){
        let student = new Role(response);
        student.Person = new Student(response.student);
        this.students.push(student);
        this.snackbar.open('Student successfully saved!', '', { duration: 3000 });
      }

    });
  }
}
