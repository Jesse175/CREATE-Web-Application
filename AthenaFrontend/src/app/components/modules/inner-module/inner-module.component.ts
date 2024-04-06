import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';
import { Module } from 'src/models/module';
import { Quest } from 'src/models/quest';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestDialogComponent } from './add-quest-dialog/add-quest-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestService } from 'src/app/services/quest.service';
import { Role } from 'src/models/role.model';

@Component({
  selector: 'app-inner-module',
  templateUrl: './inner-module.component.html',
  styleUrls: ['./inner-module.component.css']
})
export class InnerModuleComponent {
  public module: any;
  public receiveQuests: Quest[] = [];
  public quests: Quest[] = [];
  public filteredQuests: Quest[] = [];
  public role: any;
  moduleID!: string;

  constructor(public dialog: MatDialog, private router: Router, public moduleService: ModuleService, public questService: QuestService, public snackbar: MatSnackBar) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      module: Module
      role: Role
    };

    this.module = state.module;
    this.role = state.role;
  }

  async ngOnInit() {
    try {
      const allQuests = await this.questService.GetAllQuests();
      if (allQuests) {
        this.receiveQuests = allQuests.map((quest: { questID: any; name: any; description: any; expGain: any; moduleID: any; }) => new Quest({
          QuestID: quest.questID,
          Name: quest.name,
          Description: quest.description,
          ExpGain: quest.expGain,
          ModuleID: quest.moduleID
        }));
        this.filterQuests();
      } else {
        console.error('Failed to fetch quests');
      }
    } catch (error) {
      console.error('An error occurred while fetching quests', error);
    }

  }

  filterQuests() {
    this.filteredQuests = this.receiveQuests.filter(
      quest => quest.ModuleID === this.module.ModuleID
    );
  }

  public getImgLink(name: string) {
    return '../../../../assets/images/' + name.toLowerCase() + 'logo.png';
  }

  public getRGBA(hex: string, opacity: number): string {
    const conv = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
    const result = {
      r: parseInt(conv[1], 16),
      g: parseInt(conv[2], 16),
      b: parseInt(conv[3], 16)
    };
    return 'rgba(' + result.r + ', ' + result.g + ', ' + result.b + ', 0.' + opacity + ')';
  }

  public addQuest(): void {
    const dialogRef = this.dialog.open(AddQuestDialogComponent, {
      panelClass: 'custom-dialog',
      //passing data to child dialog component
      data: { moduleID: this.module.ModuleID }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response){
        let quest = new Quest(response);
        this.filteredQuests.push(quest);
        this.snackbar.open('Quest successfully added!', '', { duration: 3000 });
      }

    });
  }


}
