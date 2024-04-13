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

  statusText = 'Not Completed';
  thisdate = new Date;

  formatDate(date: Date): string {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const currentDate = month + '/' + day + '/' + year;
    return currentDate;
  }

  completeDailyStandup(): void {
    this.statusText = "Completed";
  }

}

