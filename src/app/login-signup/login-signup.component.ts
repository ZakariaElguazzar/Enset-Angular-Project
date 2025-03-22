import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-signup',
  imports: [CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginFormComponent {
  loginData = { name: '' };
  isLoginMode = true;  // Start in login mode

  toggleMode(e: Event) {
    e.preventDefault;
    this.isLoginMode = !this.isLoginMode;
  }
}
