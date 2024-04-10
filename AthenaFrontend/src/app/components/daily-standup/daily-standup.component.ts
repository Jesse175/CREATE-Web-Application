import { Component } from '@angular/core';
import { DailyStandup } from 'src/models/dailystandup';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/models/role.model';
import { Student } from 'src/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DailyStandupService } from '../../services/dailyStandup.service';

@Component({
  selector: 'app-daily-standup',
  templateUrl: './daily-standup.component.html',
  styleUrls: ['./daily-standup.component.css']
})
export class DailyStandupComponent {
  public standups: DailyStandup[] = [];

  constructor(public dialog: MatDialog, public dailyStandupService: DailyStandupService, public snackbar: MatSnackBar) {
    this.getAllDailyStandups();
  }

  public async getAllDailyStandups(): Promise<void> {
    this.standups = [];
    const response = await this.dailyStandupService.GetAllDailyStandups();
    for (let ds of response) {
      const standup = new DailyStandup(ds.id, ds.dateCreated, ds.description);
      this.standups.push(standup);
    }
  }
}
