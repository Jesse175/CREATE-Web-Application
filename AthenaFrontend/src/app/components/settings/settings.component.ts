import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/models/role.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public editing: boolean = false;
  public showPassword: boolean = false;
  public role: Role;
  public settings: any;
  public firstName: FormControl = new FormControl('');
  public lastName: FormControl = new FormControl('');
  public email: FormControl = new FormControl('');
  public password: FormControl = new FormControl('');
  public imageURL: FormControl = new FormControl('');
  constructor(public userService: UserService, public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      role: Role
    };
    this.role = state.role;
    const current = {
      FirstName: this.role.Person.FirstName,
      LastName: this.role.Person.LastName,
      Email: this.role.Person.Email,
      ImageURL: ''
    };
    this.settings = current;
    this.getSettings();
  }

  public async getSettings() {
    const response = await this.userService.GetUserSettings(this.role.RoleID);
    if (response) {
      this.firstName.setValue(response.FirstName);
      this.lastName.setValue(response.LastName);
      this.email.setValue(response.Email);
      this.imageURL.setValue(response.ImageURL);
      this.settings.ImageURL = response.ImageURL;
    }
  }

  public editSettings() {
    this.editing = true;
  }

  public saveSettings() {

  }

  public toggleEdit() {
    this.editing = !this.editing;
  }

  public toggleHidePassword(): void {
    this.showPassword = !this.showPassword;
    const el = document.getElementById('show-hide') as HTMLElement;
    const input = document.querySelector('#validationServer04') as HTMLInputElement;
    if (this.showPassword) {
      el.innerHTML = '<i class="bi bi-eye"></i>';
      input.type = 'text';
    } else {
      el.innerHTML = '<i class="bi bi-eye-slash"></i>';
      input.type = 'password';
    }
  }
}
