import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
  isAuthenticated: WritableSignal<boolean> = signal(false);
  constructor(private router: Router) {
    const token = localStorage.getItem('token');
    this.isAuthenticated.set(!!token);
  }

  login(uname: string, password: string): boolean {
    if (uname === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'admin');
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
}
logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated();
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
