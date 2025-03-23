import { Component, EventEmitter, Output,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatIconModule } from '@angular/material/icon'; // ✅ Import Material Icons
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule,CommonModule], // ✅ Ensure Material Icons are imported
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() isOpen = false;
  @Output() toggleEvent = new EventEmitter<void>(); // ✅ Event to toggle sidebar

  constructor(private authService: AuthService, private router: Router) {}

  toggleSidebar() {
    this.toggleEvent.emit(); // ✅ Emit event when button is clicked
  }

  logout() {
    this.authService.logout(); // ✅ Call logout function from AuthService
    this.router.navigate(['/']); // ✅ Redirect to login page
  }
}
