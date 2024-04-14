import { Component, Input } from '@angular/core';
import { DailyStandup } from 'src/models/dailystandup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditDailyStandupComponent } from '../edit-daily-standup/edit-daily-standup.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-daily-standup-card',
  templateUrl: './daily-standup-card.component.html',
  styleUrls: ['./daily-standup-card.component.css']
})


export class DailyStandupCardComponent {
  @Input() standups: DailyStandup[] = [];

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) { }

  statusText = 'Not Completed';
  thisdate = new Date;

  formatDate(date: Date): string {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const currentDate = month + '/' + day + '/' + year;
    return currentDate;
  }

  public async editStandup(standup: DailyStandup): Promise<void> {
    const dialogRef = this.dialog.open(EditDailyStandupComponent, {
      panelClass: 'custom-dialog',
      data: { standup: standup }
    });
  }

}

