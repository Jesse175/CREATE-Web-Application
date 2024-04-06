import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/models/module';
import { Quest } from 'src/models/quest';
import { Role } from 'src/models/role.model';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  public quest: any;
  public module: any;
  public role: any;
  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      quest: Quest,
      module: Module,
      role: Role
    };

    this.quest = state.quest;
    this.module = state.module;
    this.role = state.role;
  }

}
