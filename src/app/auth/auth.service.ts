import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RunService } from '../dashboard/run.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private uAuth: AngularFireAuth,
    private runService: RunService,
    private UiService: UIService,
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
    this.UiService.loadingStateChanged.next(true);
    this.uAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.UiService.loadingStateChanged.next(false);
      })
      .catch((error) => {
        this.UiService.loadingStateChanged.next(false);
        this.UiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    this.UiService.loadingStateChanged.next(true);
    this.uAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.UiService.loadingStateChanged.next(false);
      })
      .catch((error) => {
        this.UiService.loadingStateChanged.next(false);
        this.UiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout() {
    this.uAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
