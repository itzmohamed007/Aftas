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
    this.getAccounts();
  }
  @Input() users: any = [];
  private getAccounts() {
    console.log('get accounts called successfully');
    this.usersService.getAccounts().subscribe({
      next: (data) => {
        this.users = data;
        console.clear();
        console.log(data);
      },
      error: (e) => {
        console.log('something went wrong while fetching accounts');
        console.log(e);
      },
    });
  }

  unlockAccount(num: number) {
    this.usersService.unlockAccount(num).subscribe({
      next: (data) => {
        console.log('unlocked successfully');
        this.getAccounts();
      },
      error: (e) => {
        console.log('something went wrong while unlocking account');
        console.log(e);
      },
    });
  }
}
