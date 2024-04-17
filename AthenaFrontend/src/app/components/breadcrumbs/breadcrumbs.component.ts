import { Component, Input } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StudentsPageComponent } from '../students-page/students-page.component';
import { ModulesComponent } from '../modules/modules.component';
import { InnerModuleComponent } from '../modules/inner-module/inner-module.component';
import { QuestsComponent } from '../modules/inner-module/quests/quests.component';
import { SettingsComponent } from '../settings/settings.component';
import { AuthGuardService as AuthGuard } from '../../services/auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from '../../services/auth/role-guard.service';
import { Module } from 'src/models/module';
import { AuthService } from 'src/app/services/auth/auth.service';


const R: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentsPageComponent, canActivate: [RoleGuard] },
  { path: 'modules', component: ModulesComponent, canActivate: [AuthGuard] },
  { path: 'modules/:ModuleID', component: InnerModuleComponent, canActivate: [AuthGuard] },
  { path: 'quests/:QuestID', component: QuestsComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
]

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  public prevPages: any[] = [];
  @Input() currentPage: any;
  @Input() modules: Module[] = [];

  constructor(
    public breadcrumb: BreadcrumbService, 
    public router: Router,
    private authService: AuthService
  ) {
    
    breadcrumb.addPage(breadcrumb.getCurrentPage(this.currentPage));
    this.prevPages = breadcrumb.getPrevPages();
  }

  navigate(extension: String){
    this.router.navigate([extension])
    
  }
}
