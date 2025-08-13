import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  router = inject(Router);

  // Define the form controls and form group
 emailId: FormControl = new FormControl('', [Validators.required, Validators.email]);
 password: FormControl = new FormControl('', [Validators.required]);

 loginForm: FormGroup = new FormGroup({
   emailId: this.emailId,
   password: this.password
 });

 onSubmit() {
  console.log('Form Submitted', this.loginForm.valid);
  if (this.loginForm.valid) {
     const email = this.loginForm.value.emailId;
     const password = this.loginForm.value.password;
     console.log('Email:', email);
     console.log('Password:', password);
     if (email === 'admin@gmail.com' && password === '12345') {
      localStorage.setItem('token', 'admin-token');
      this.router.navigate(['/dashboard']);
       // Perform login action
       console.log('Logging in with email:', email);
     }
  }
     // Here you can add your login logic, like calling an API
}
}
