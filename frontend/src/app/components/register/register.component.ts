// register.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  @Output() registerSuccess = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  register(): void {
    const registerData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    this.http.post<any>('http://localhost:5000/api/users', registerData, { headers })
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);

          // Store user information in localStorage
          localStorage.setItem('user', JSON.stringify(response));

          // Emit event to notify successful registration
          this.registerSuccess.emit();
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle error, show error message, etc.
        }
      );
  }
}
