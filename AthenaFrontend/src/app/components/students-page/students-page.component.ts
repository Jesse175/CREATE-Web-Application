import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialog } from './add-student-dialog/add-student-dialog';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {
  public students = ['Dipper', 'Mabel'];

  constructor(public dialog: MatDialog) {}

  addStudent(): void {
    const dialogRef = this.dialog.open(AddStudentDialog, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(data => {
      // Call Add Student in the API
    });
  }
}
