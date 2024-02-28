import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  errorMessages: any[] = [];

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    familyName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    identityDocument: new FormControl('', Validators.required),
    identityNumber: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  onSubmit(): any {
    this.authService.register(this.registerForm.value).subscribe({
      next: (data) => {
        alert(
          'Your account has been created, In order to login, it should be validated by the Manager'
        );
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.log('something went wrong registering new user');
        if (err.error) {
          this.errorMessages = [];
          Object.keys(err.error).forEach((key) => {
            this.errorMessages.push(err.error[key] + "\n");
          });
          alert(this.errorMessages);
        }
        console.log(err);
      },
    });
  }
}
