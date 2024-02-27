import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  public constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.getLockedAccounts();
  }
  @Input() users: any = [];
  private getLockedAccounts() {
    this.usersService.getLockedAccounts().subscribe({
      next: (data) => {
        this.users = data;
        console.clear();
        console.log(data);
      },
      error: (e) => {
        console.log('something went wrong while fetching locked accounts');
        console.log(e);
      },
    });
  }
}
