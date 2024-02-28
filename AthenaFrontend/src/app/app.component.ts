import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { AuthToken } from 'src/models/authtoken.model';
import { Router } from '@angular/router';
import { Role } from 'src/models/role.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CREATE';
  public user: any;
  protected auth: any;

  constructor(private authService: AuthService, public router: Router){}

  private async getAuthentication(): Promise<AuthToken> {
    return await this.authService.getAuthentication();
  }

  public async ngOnInit(): Promise<void> {
    if (this.authService.token != undefined && this.authService.token != null && this.authService.token != ''){
      if (await this.authService.isAuthenticated){
        const response = await this.getAuthentication();
        this.auth = new AuthToken(response);
        this.user = new Role(this.auth.Role);
      } else {
        this.router.navigateByUrl('/login');
        console.log('should be to login');
      }
    } else {
      this.router.navigateByUrl('/login');
      console.log('should be to login');
    }
  }
}
