import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NewPlantComponent } from './dashboard/new-plant/new-plant.component';
import { PastPlantsComponent } from './dashboard/past-plants/past-plants.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlantComponent } from './dashboard/plant/plant.component';

@NgModule({
  declarations: [		
    AppComponent,
      LandingPageComponent,
      SignupComponent,
      LoginComponent,
      NewPlantComponent,
      PastPlantsComponent,
      PlantComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
