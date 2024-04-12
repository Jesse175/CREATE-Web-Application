import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DailyStandup } from 'src/models/dailystandup';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { DailyStandupService } from '../../../services/dailyStandup.service';

export interface StandupData {
  Description: string;
}

@Component({
  selector: 'app-edit-daily-standup',
  templateUrl: './edit-daily-standup.component.html',
  styleUrls: ['./edit-daily-standup.component.css']
})
export class EditDailyStandupComponent {
  public standup: DailyStandup;
  public dsDescription = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditDailyStandupComponent>, public dailyStandupService: DailyStandupService) {
    this.standup = this.data.standup;
    this.dsDescription.setValue(this.standup.description);
  }

  public okClose(): void {
    this.dialogRef.close(true);
  }
}
