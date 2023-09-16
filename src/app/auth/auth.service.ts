import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RunService } from '../dashboard/run.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private uAuth: AngularFireAuth,
    private runService: RunService
  ) {}

  initAuthListener() {
    this.uAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/run']);
      } else {
        this.runService.cancelSubscription();
        this.authChange.next(false);
        this.router.navigate(['/']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.uAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.uAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.uAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

}
