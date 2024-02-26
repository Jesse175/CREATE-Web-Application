import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsPageComponent } from './components/students-page/students-page.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import { StudentCardComponent } from './components/students-page/student-card/student-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStudentDialog } from './components/students-page/add-student-dialog/add-student-dialog';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentsPageComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'mentor'
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StudentsPageComponent,
    StudentCardComponent,
    AddStudentDialog
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
