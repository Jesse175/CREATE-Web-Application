import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorService } from 'src/app/services/mentor.service';
import { AddMentorDialog } from './add-mentor-dialog/add-mentor-dialog';
import { Role } from 'src/models/role.model';
import { Mentor } from 'src/models/mentor.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public dialog: MatDialog, public mentorService: MentorService, public snackbar: MatSnackBar) {}

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
}
