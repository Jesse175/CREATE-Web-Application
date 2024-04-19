import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/models/module';
import { Quest } from 'src/models/quest';
import { Role } from 'src/models/role.model';
import { EditQuestDialogComponent } from '../edit-quest-dialog/edit-quest-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { StudentQuest } from 'src/models/studentQuest.model';
import { QuestService } from 'src/app/services/quest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  public quest: any;
  public module: any;
  public moduleID: string;
  public role: any;
  private updateStudentQuest: any;
  private questDetails: any;
  completed: boolean;

  constructor(public router: Router, public dialog: MatDialog, public snackbar: MatSnackBar, public breadcrumb: BreadcrumbService,
    public questService: QuestService, private location: Location
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      quest: Quest,
      module: Module,
      role: Role,
      flag: boolean
    };

    this.quest = state.quest;
    this.module = state.module;
    this.moduleID = this.module.ModuleID;
    this.role = state.role;
    this.completed = state.flag;

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
  
  goBack() {
    this.location.back();
  }

  public completeQuest(): void {
    var newStudentQuest = {
      StudentID: this.role.RoleID,
      QuestID: this.quest.QuestID,
      Completed: true,
      LastActivityDate: new Date()
    };
    this.updateStudentQuest = new StudentQuest(newStudentQuest);
    console.log(this.updateStudentQuest);
    this.questService.UpdateQuestCompletion(this.updateStudentQuest);
  }

  public uncompleteQuest(): void {
    var newStudentQuest = {
      StudentID: this.role.RoleID,
      QuestID: this.quest.QuestID,
      Completed: false,
      LastActivityDate: new Date()
    };
    this.updateStudentQuest = new StudentQuest(newStudentQuest);
    console.log(this.updateStudentQuest);
    this.questService.UpdateQuestCompletion(this.updateStudentQuest);
  }
}
