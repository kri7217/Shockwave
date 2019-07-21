import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training/training.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path:'signIn',component:SignInComponent},
  {path:'login',component:LoginComponent},
  { path: 'training', component: TrainingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
