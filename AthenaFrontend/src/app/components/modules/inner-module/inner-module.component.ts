import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';
import { Module } from 'src/models/module';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestDialogComponent } from './add-quest-dialog/add-quest-dialog.component';

@Component({
  selector: 'app-inner-module',
  templateUrl: './inner-module.component.html',
  styleUrls: ['./inner-module.component.css']
})
export class InnerModuleComponent {
  public module: any;

  constructor(public dialog: MatDialog, private router: Router, public moduleService: ModuleService, public questService: QuestService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      module: Module
    };

    this.module = state.module;
  }

  public addQuest(): void {
    const dialogRef = this.dialog.open(AddModuleDialog, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response){
        let module = new Module(response);
        this.modules.push(module);
        this.snackbar.open('Module successfully added!', '', { duration: 3000 });
      }

    });
  }

  
}
