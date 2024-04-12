import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModuleDialog } from './add-module-dialog/add-module-dialog';
import { Module } from 'src/models/module';
import { ModuleService } from 'src/app/services/module.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Role } from 'src/models/role.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  public modules: Module[] = [];
  public role: any;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar, public moduleService: ModuleService, public router: Router, public breadcrumb: BreadcrumbService) {
    this.getAllModules();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      role: Role
    };
    this.role = state.role;

    const pageName: String = 'Modules'
    breadcrumb.setPrevPages(pageName);
    const prevPages: any[] = breadcrumb.getPrevPages();
    const currentPage: any = breadcrumb.getCurrentPage(pageName);
  }

  public addModule(): void {
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

  public async getAllModules(): Promise<void> {
    this.modules = [];
    const response = await this.moduleService.GetAllModules();
    for (let mod of response){
      let module = new Module(mod);
      this.modules.push(module);
    }
  }
}
