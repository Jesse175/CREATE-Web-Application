import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';
import { Module } from 'src/models/module';

@Component({
  selector: 'app-inner-module',
  templateUrl: './inner-module.component.html',
  styleUrls: ['./inner-module.component.css']
})
export class InnerModuleComponent {
  public module: any;

  constructor(private router: Router, public moduleService: ModuleService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      module: Module
    };

    this.module = state.module;
  }
}
