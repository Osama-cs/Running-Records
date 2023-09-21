import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RunComponent } from './dashboard/runs/runs.component';
import { AuthGuard } from './auth/auth.guard';
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
    path: 'run',
    component: RunComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
