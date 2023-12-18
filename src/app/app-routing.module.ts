import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionsComponent} from "./components/competitions/competitions.component";
import {MembersComponent} from "./components/members/members.component";
import {NewCompetitionComponent} from "./components/new-competition/new-competition.component";
import {PodiumComponent} from "./components/podium/podium.component";

const routes: Routes = [
  {
    path: "competitions",
    component: CompetitionsComponent,
  },
  {
    path: "members",
    component: MembersComponent
  },
  {
    path: "new-competition",
    component: NewCompetitionComponent
  },
  {
    path: "podium/:code",
    component: PodiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
