import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { debounceTime } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

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
export class AddStudentDialog implements OnInit {
  public showPassword = false;
  public firstName = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.email, Validators.required]);

  constructor(public dialogRef: MatDialogRef<AddStudentDialog>, public userService: UserService, public studentService: StudentService) {}

  private async checkEmail(email: any): Promise<boolean> {
    return await this.userService.CheckEmail(email);
  }

  public async addStudent(): Promise<any> {
    const student = {
      FirstName: this.firstName.value,
      LastName: this.lastName.value,
      Email: this.email.value,
      Password: this.password.value
    };
    const response = await this.studentService.AddStudent(student);
    this.dialogRef.close(response);
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

  public async ngOnInit(): Promise<void> {

    // Subscribe to changes to the email value to show feedback of whether email is valid
    this.email.valueChanges.pipe(debounceTime(1000)).subscribe(async email => {
      const emailInUse = document.querySelector('#validationServer01Feedback') as HTMLElement;
      const emailValid = document.querySelector('#validationServer02Feedback') as HTMLElement;
      const submitButton = document.querySelector('#submit') as HTMLButtonElement;
      if (this.email.valid){
        emailValid.style.display = 'none';
        const inUse = await this.checkEmail(email);
        if (inUse == true){
          emailInUse.style.display = 'block';
          submitButton.disabled = true;
        } else {
          emailInUse.style.display = 'none';
          submitButton.disabled = false;
        }
      } else {
        submitButton.disabled = true;
        emailInUse.style.display = 'none';
        emailValid.style.display = 'block';
      }
    });
  }
}
