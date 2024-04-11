import { Component, Input } from '@angular/core';
import { DailyStandup } from 'src/models/dailystandup';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/models/role.model';
import { Student } from 'src/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DailyStandupService } from '../../services/dailyStandup.service';
import { AuthToken } from 'src/models/authtoken.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-daily-standup',
  templateUrl: './daily-standup.component.html',
  styleUrls: ['./daily-standup.component.css']
})
export class DailyStandupComponent {
  public standups: DailyStandup[] = [];
  public role: any;
  protected auth: any;

  constructor(private authService: AuthService, public dailyStandupService: DailyStandupService, public snackbar: MatSnackBar, public router: Router) {

  }

  private async getAuthentication(): Promise<AuthToken> {
    return await this.authService.getAuthentication();
  }

  public async getAllDailyStandups(id: string): Promise<void> {
    this.standups = [];
    const response = await this.dailyStandupService.GetAllDailyStandups(id);
    if (response) {
    console.log(response);
      for (let ds of response) {
          const standup = new DailyStandup(ds.standupID, ds.studentID, ds.userID, ds.dateCreated, ds.description);
          this.standups.push(standup);
        }
    }
  }

  public async ngOnInit(): Promise<void> {
    const response = await this.getAuthentication();
    this.auth = new AuthToken(response);
    this.role = this.auth.Role;
    if (this.role.Name == 'Student') {
      this.getAllDailyStandups(this.role.RoleID);
    }
  }
}
