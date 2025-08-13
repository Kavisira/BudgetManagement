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
     if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
  }

     }
 
}
