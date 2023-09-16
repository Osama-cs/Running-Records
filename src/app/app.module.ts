import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NewRunComponent } from './dashboard/new-run/new-run.component';
import { PastRunsComponent } from './dashboard/past-runs/past-runs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RunComponent } from './dashboard/runs/runs.component';
import { AuthService } from './auth/auth.service';
import { CurrentRunComponent } from './dashboard/current-run/current-run.component';
import { StopRunComponent } from './dashboard/current-run/stop-run-component';
import { RunService } from './dashboard/run.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupComponent,
    LoginComponent,
    NewRunComponent,
    PastRunsComponent,
    RunComponent,
    CurrentRunComponent,
    StopRunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
  ],
  providers: [AuthService, RunService],
  bootstrap: [AppComponent],
})
export class AppModule {}
