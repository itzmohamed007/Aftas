import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../models/Competition";
import {PaginationModel} from "../models/PaginationModel";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  constructor() { }
  private http = inject(HttpClient);
  private url = "http://localhost:8080/api/competitions";

  getCompetitions(filter:string|null, page: number): Observable<PaginationModel<Competition>> {
    `${this.url}?page=${page}&size=6&filter=${filter}`;
    return this.http.get<PaginationModel<Competition>>(`${this.url}?page=${page}&size=6&filter=${filter}`);
  }
}
