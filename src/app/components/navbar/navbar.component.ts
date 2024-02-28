import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isOpen: boolean = false;
  navigations: any[] = [
    {
      title: 'Competitions',
      path: '/competitions',
    },
    {
      title: 'Members',
      path: '/members',
    },
    {
      title: 'Manager Dashboard',
      path: '/manager/dashboard',
    },
    {
      title: 'login',
      path: '/auth/login'
    }
  ];

  logout() {
    localStorage.removeItem("token")
    alert("loged out successfully")
    this.router.navigate(['/auth/login'])
  }
}
