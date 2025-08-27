import { Routes } from '@angular/router';
import { AuthGuard } from './core/gaurd/auth.guard';
export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
        // canActivate: [AuthGuard] // Assuming you have a guard to check authentication
    },
    {
        path: '',
        loadComponent: () => import('./layout/layout/layout.component').then(m => m.LayoutComponent),
        children:[{
            path: 'dashboard',
            loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        }]
    },
];
