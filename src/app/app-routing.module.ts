import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PlantComponent } from './dashboard/plant/plant.component';
const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'plant',
    component: PlantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
