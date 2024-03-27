import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ModuleService } from 'src/app/services/module.service';

export interface ModuleData {
  Name: string;
  Color: string;
  Description: string;
}

@Component({
  selector: 'app-add-quest-dialog',
  templateUrl: './add-quest-dialog.component.html',
  styleUrls: ['./add-quest-dialog.component.css']
})
export class AddQuestDialogComponent {
  public showPassword = false;
  public name = new FormControl('', [Validators.required]);
  public color = new FormControl('', [Validators.required]);
  public description = new FormControl('');

  constructor(public dialogRef: MatDialogRef<AddQuestDialogComponent>, public moduleService: ModuleService) {}

  public async addModule(): Promise<any> {
    const module = {
      Name: this.name.value,
      Color: this.color.value?.substring(1),
      Description: this.description.value
    };
    const response = await this.moduleService.AddModule(module);
    this.dialogRef.close(response);
  }
}
