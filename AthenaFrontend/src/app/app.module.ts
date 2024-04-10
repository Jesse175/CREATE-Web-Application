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
import { AddStudentDialog } from './components/students-page/add-student-dialog/add-student-dialog';
import { ModulesComponent } from './components/modules/modules.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddMentorDialog } from './components/dashboard/add-mentor-dialog/add-mentor-dialog';
import { AddModuleDialog } from './components/modules/add-module-dialog/add-module-dialog';
import { InnerModuleComponent } from './components/modules/inner-module/inner-module.component';
import { ModuleCardComponent } from './components/modules/module-card/module-card.component';
import { AddQuestDialogComponent } from './components/modules/inner-module/add-quest-dialog/add-quest-dialog.component';
import { QuestsComponent } from './components/modules/inner-module/quests/quests.component';
import { EditQuestDialogComponent } from './components/modules/inner-module/edit-quest-dialog/edit-quest-dialog';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentsPageComponent, canActivate: [RoleGuard] },
  { path: 'modules', component: ModulesComponent, canActivate: [AuthGuard] },
  { path: 'modules/:ModuleID', component: InnerModuleComponent, canActivate: [AuthGuard] },
  { path: 'quests/:QuestID', component: QuestsComponent, canActivate: [AuthGuard] },
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
    AddMentorDialog,
    AddModuleDialog,
    InnerModuleComponent,
    ModuleCardComponent,
    AddQuestDialogComponent,
    EditQuestDialogComponent,
    QuestsComponent
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
    MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
