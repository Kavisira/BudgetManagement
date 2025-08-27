import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  currentRoute: string = '';
  isCollapsed = false;
  constructor(private router: Router) {
    this.currentRoute = this.router.url
  }
menuItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Settings', icon: 'settings', route: '/settings' }
  ];

collapseToggle() {
  this.isCollapsed = !this.isCollapsed;
}
}
