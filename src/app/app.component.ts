import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'inventory-management-system';
  constructor(private router: Router) {
    console.log('AppComponent initialized', !localStorage.getItem('token'));
     if (!localStorage.getItem('token')) {
      console.log('No token found, redirecting to login');
      this.router.navigate(['/login']);
  } else {
      console.log('Token found, proceeding with application');
      this.router.navigate(['/dashboard']);

     }
 
}
}
