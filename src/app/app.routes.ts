import { Routes } from '@angular/router';
import { MainComponent } from './UI/pages/main/main.component';
import { LoginComponent } from './UI/pages/login/login.component';
import { RegisterComponent } from './UI/pages/register/register.component';

export const routes: Routes = [
  {path : "main", component: MainComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", redirectTo: "main", pathMatch: 'full'}
];
