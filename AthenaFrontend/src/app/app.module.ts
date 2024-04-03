import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsPageComponent } from './components/students-page/students-page.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { StudentCardComponent } from './components/students-page/student-card/student-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddStudentDialog } from './components/students-page/add-student-dialog/add-student-dialog';
import { ViewStudentDialog } from './components/students-page/view-student-dialog/view-student-dialog';
import { ModulesComponent } from './components/modules/modules.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddMentorDialog } from './components/dashboard/add-mentor-dialog/add-mentor-dialog';
import { AddModuleDialog } from './components/modules/add-module-dialog/add-module-dialog';
import { InnerModuleComponent } from './components/modules/inner-module/inner-module.component';
import { ModuleCardComponent } from './components/modules/module-card/module-card.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentsPageComponent, canActivate: [RoleGuard] },
  { path: 'modules', component: ModulesComponent, canActivate: [AuthGuard] },
  { path: 'modules/:ModuleID', component: InnerModuleComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StudentsPageComponent,
    ModulesComponent,
    RegisterComponent,
    StudentCardComponent,
    AddStudentDialog,
    ViewStudentDialog,
    AddMentorDialog,
    AddModuleDialog,
    InnerModuleComponent,
    ModuleCardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
