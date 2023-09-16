import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'running-records';
  isAuth = false;
  authSubscription!: Subscription;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.authService.initAuthListener();
  }

  onLogout(){
    this.authService.logout();
  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogoutSideNav(){
    this.onClose();
    this.authService.logout();
  }

  ngOnDestroy() {
      this.authSubscription.unsubscribe();
  }
}
