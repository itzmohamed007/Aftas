import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): any {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data.token)
        localStorage.setItem("token", data.token)
        alert('connected successfully');
        this.router.navigate(['/competitions']);
      },
      error: (err) => {
        console.log('something went wrong while connection');
        alert(err.error.message);
        console.log(err);
      },
    });
  }
}
