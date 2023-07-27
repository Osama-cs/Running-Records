import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NewRunComponent } from './dashboard/new-run/new-run.component';
import { PastRunsComponent } from './dashboard/past-runs/past-runs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RunComponent } from './dashboard/runs/runs.component';
import { AuthService } from './auth/auth.service';
import { RunService } from './dashboard/run.service';

@NgModule({
  declarations: [		
    AppComponent,
      LandingPageComponent,
      SignupComponent,
      LoginComponent,
      NewRunComponent,
      PastRunsComponent,
      RunComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
