import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { Competition } from '../../models/Competition';
import { Member } from '../../models/Member';
import { RankingService } from '../../services/ranking.service';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css'],
})
export class CompetitionsComponent implements OnInit {
  competitions: Competition[] = [];
  members: Member[] = [];
  filteredMembers: Member[] = [];
  filter: string = 'all';
  pages: number[] = [0];
  currentPage: number = 0;
  totalElements: number = 0;
  displayDialog: boolean = false;
  competitionToLink: Competition | null = null;
  memberToLink: Member | null = null;
  constructor(
    private competitionService: CompetitionService,
    private rankingService: RankingService,
    private memberService: MemberService
  ) {}
  ngOnInit(): void {
    this.loadCompetitions();
    this.loadMembers();
  }
  displayLinkingDialog(competition: Competition) {
    this.competitionToLink = competition;
    this.filteredMembers = this.members.filter((member) => {
      return !competition.rankings.some(
        (ranking) => ranking.member.num == member.num
      );
    });
    this.displayDialog = true;
  }
  loadCompetitions(): void {
    this.competitionService
      .getCompetitions(this.filter, this.currentPage)
      .subscribe({
        next: (data) => {
          this.competitions = data.content;
          this.pages = new Array(data.totalPages);
          this.currentPage = data.pageable.pageNumber;
          this.totalElements = data.totalElements;
          console.log(data.content);
        },
        error: (err) => console.log(err),
      });
  }
  loadMembers(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
        this.filteredMembers = members;
        console.log(members);
      },
      error: (err) => console.log(err),
    });
  }
  linkMember() {
    console.log('member to link' + this.memberToLink?.num);
    this.rankingService
      .linkMember(this.memberToLink, this.competitionToLink)
      .subscribe({
        next: (ranking) => {
          console.log(ranking);
          this.loadCompetitions();
          this.displayDialog = false;
        },
        error: (e) => {
          console.log('an error occurred while linked member to competition');
          console.log(e);
        },
      });
  }
  filterCompetitions(): void {
    this.currentPage = 0;
    this.loadCompetitions();
    this.currentPage = 0;
  }
  setCurrentPage(choosenPage: number): void {
    console.log('choosen page' + choosenPage);
    this.currentPage = choosenPage;
    this.loadCompetitions();
  }
  displayRanking(date: string): boolean {
    return new Date(date) <= new Date();
  }
  assignMembers(date: string): boolean {
    return new Date(date) > new Date();
  }
}
