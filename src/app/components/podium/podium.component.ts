import {Component, OnInit} from '@angular/core';
import {RankingService} from "../../services/ranking.service";
import {Ranking} from "../../models/Ranking";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit{
  first: Ranking|null = null;
  second: Ranking|null = null;
  third: Ranking|null = null;
  code: string|null = ""

  constructor(private service:RankingService, private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get("code")
    this.loadPodium();
  }
  loadPodium() {
    this.service.getPodium(this.code).subscribe({
      next: rankings => {
        this.first = rankings[0];
        this.second = rankings[1];
        this.third = rankings[2];
      },
      error: error => {
        console.log("an error occurred while fetching podium");
        console.log(error)
      }
    })
  }
}
