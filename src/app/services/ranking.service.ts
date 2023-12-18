import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../models/Member";
import {Competition} from "../models/Competition";
import {Observable} from "rxjs";
import {Ranking} from "../models/Ranking";

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  constructor() { }
  private http:HttpClient = inject(HttpClient);
  private url:string = "http://localhost:8080/api/rankings";

  linkMember(member:Member|null, competition:Competition|null):Observable<Ranking> {
    return this.http.post<Ranking>(this.url, {
      member: member?.num,
      competition: competition?.code
    });
  }
}
