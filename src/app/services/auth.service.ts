import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:8080/api/auth";

  register(register: any):Observable<any> {
    return this.http.post<any>(`${this.url}/register`, register);
  }

  login(login: any):Observable<Token> {
    return this.http.post<Token>(`${this.url}/login`, login);
  }
}
