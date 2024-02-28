import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/users';

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  unlockAccount(num: number): Observable<any> {
    return this.http.patch<any>(`${this.url}/unlock/${num}`, {});
  }
}
