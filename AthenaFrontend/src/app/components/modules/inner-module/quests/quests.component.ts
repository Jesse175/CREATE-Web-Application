import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/models/module';
import { Quest } from 'src/models/quest';
import { Role } from 'src/models/role.model';
import { EditQuestDialogComponent } from '../edit-quest-dialog/edit-quest-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  public quest: any;
  public module: any;
  public role: any;
  constructor(public router: Router, public dialog: MatDialog, public snackbar: MatSnackBar, public breadcrumb: BreadcrumbService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      quest: Quest,
      module: Module,
      role: Role
    };

    this.quest = state.quest;
    this.module = state.module;
    this.role = state.role;

    const pageName: string = this.quest.Name;
    breadcrumb.makeCurrentPage(pageName, router.url, state);
    breadcrumb.setPrevPages();
  }

  public editQuest(): void {
    const dialogRef = this.dialog.open(EditQuestDialogComponent, {
      panelClass: 'custom-dialog',
      data: { quest: this.quest }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response){
        let newQuest = new Quest(response);
        this.quest = newQuest;
        this.snackbar.open('Quest successfully updated!', '', { duration: 3000 });
      }
    });
  }

  public completeQuest(): void {
    // Will complete when student side of inner module is completed
  }

  public uncompleteQuest(): void {
    // Will complete when student side of inner module is completed
  }
}
