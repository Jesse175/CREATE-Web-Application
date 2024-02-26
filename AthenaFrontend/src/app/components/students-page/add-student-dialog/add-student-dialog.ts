import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface StudentData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.html',
  styleUrls: ['./add-student-dialog.css']
})
export class AddStudentDialog {
  public showPassword = false;
  constructor(public dialogRef: MatDialogRef<AddStudentDialog>) {}

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
