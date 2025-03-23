import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
})
export class LoginFormComponent {
  isLoginMode = true;
  name = '';
  login = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {} // ✅ Inject Router

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login({ login: this.login, password: this.password }).subscribe((users) => {
        if (users.length > 0) {
          alert('Login successful!');
          this.router.navigate(['/dashboard']); // ✅ Navigate after successful login
        } else {
          alert('Invalid email or password!');
        }
      });
    } else {
      this.authService.register({ name: this.name, login: this.login, password: this.password }).subscribe(() => {
        alert('Registration successful! Please log in.');
        this.toggleMode(new Event('click'));
      });
    }
  }
}
