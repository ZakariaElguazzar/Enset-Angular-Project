import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon'; 



@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Required for standalone components
  imports: [CommonModule,RouterModule,SidebarComponent,NavbarComponent,MatIconModule], // ✅ Ensure CommonModule is imported
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isOpen = false; // ✅ Sidebar state

  toggleSidebar() {
    this.isOpen = !this.isOpen; // ✅ Toggle state
  }
}

