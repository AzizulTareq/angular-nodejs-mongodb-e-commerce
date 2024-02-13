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

          localStorage.setItem('user', JSON.stringify(response));

          this.registerSuccess.emit();
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
  }
}
