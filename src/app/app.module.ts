import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularMaterialModuleModule} from './angular-material-module/angular-material-module.module';
import { LoginComponent } from './auth/login/login.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { TrainingComponent } from './training/training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { NewTrainingsComponent } from './training/new-trainings/new-trainings.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { StopTrainingComponent } from './training/stop-training/stop-training.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    NewTrainingsComponent,
    HomeComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
