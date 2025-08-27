import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../core/services/auth-service.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
router = inject(Router);
isProfileMenuOpen = false;
currentRoute: string = this.router.getCurrentNavigation()?.finalUrl?.toString() || '';

constructor(private Authservice: AuthServiceService) {
  console.log('Current route:', this.currentRoute);
}

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  logout() {
    // Implement logout logic here
    console.log('User logged out');
    this.Authservice.logout(); // Assuming AuthService is injected
  }
}
