import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../models/Member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor() { }
  private http = inject(HttpClient);
  private url = "http://localhost:8080/api/members";

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.url}/all`);
  }
}
