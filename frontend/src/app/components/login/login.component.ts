import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login(): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    this.http.post<any>('http://localhost:5000/api/users/login', loginData, { headers })
      .subscribe(
        (response) => {
          localStorage.setItem('user', JSON.stringify(response));
          console.log('Login successful:', response);
          this.loginSuccess.emit();
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
