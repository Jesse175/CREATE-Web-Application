import { Component, Input } from '@angular/core';
import { DailyStandup } from 'src/models/dailystandup';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-daily-standup-card',
  templateUrl: './daily-standup-card.component.html',
  styleUrls: ['./daily-standup-card.component.css']
})
export class DailyStandupCardComponent {
  @Input() standups: DailyStandup[] = [];

  statusText = 'Not Completed'

  getDateFromISOString(): string {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    const currentDate = month + '/' + day + '/' + year;
    return currentDate;
  }

  completeDailyStandup(): void {
    this.statusText = "Completed";
  }

}

