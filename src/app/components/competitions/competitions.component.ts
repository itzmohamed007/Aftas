import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition.service";
import {Competition} from "../../models/Competition";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent  implements OnInit {
  competitions: Competition[] = [];
  filter:string = "all";
  pages: number[] = [0];
  currentPage: number = 0;
  totalElements: number = 0;
  constructor(private competitionService:CompetitionService) {}
  ngOnInit(): void {
    this.loadCompetitions();
  }
  loadCompetitions():void {
    this.competitionService.getCompetitions(this.filter, this.currentPage).subscribe({
      next: (data) => {
        this.competitions = data.content;
        this.pages = new Array(data.totalPages)
        this.currentPage = data.pageable.pageNumber
        this.totalElements = data.totalElements
      },
      error: (err) => console.log(err)
    })
  }
  filterCompetitions():void {
    this.currentPage = 0
    this.loadCompetitions();
    this.currentPage = 0
  }
  setCurrentPage(choosenPage: number): void {
    console.log("choosen page" + choosenPage);
    this.currentPage = choosenPage;
    this.loadCompetitions();
  }
}
