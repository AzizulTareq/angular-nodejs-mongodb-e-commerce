// app.component.ts
import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoginModal = false;
  showRegisterModal = false;
  isLoggedIn = false;

  constructor(private http: HttpClient, private zone: NgZone) {
    this.checkLoggedIn();
  }

  openLoginModal(): void {
    this.showLoginModal = true;
  }

  closeLoginModal(): void {
    this.showLoginModal = false;
    this.checkLoggedIn();
  }

  openRegisterModal(): void {
    this.showRegisterModal = true;
  }

  closeRegisterModal(): void {
    this.showRegisterModal = false;
    this.checkLoggedIn();
  }

  logout(): void {
    this.http.post<any>('http://localhost:5000/api/users/logout', {}).subscribe(
      () => {
        console.log('Logout successful');
        this.clearUserData();
      },
      (error) => {
        console.error('Logout failed:', error);
      }
    );
  }

  private checkLoggedIn(): void {
    const user = this.getUserData();
    this.isLoggedIn = !!user;
  }

  private clearUserData(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('user');
    }
    this.isLoggedIn = false;
  }

  private getUserData(): any {
    return this.isLocalStorageAvailable() ? JSON.parse(localStorage.getItem('user') || '{}') : null;
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && window.localStorage !== undefined;
  }

  handleRegisterSuccess(): void {
    this.closeRegisterModal();
    // You can perform additional actions after successful registration, if needed
  }
}
