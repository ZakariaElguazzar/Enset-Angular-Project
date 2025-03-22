import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-signup/login-signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapplication';
}
