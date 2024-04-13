import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ExamsComponent } from './components/exams/exams.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'exams', component: ExamsComponent, outlet: 'exams' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
