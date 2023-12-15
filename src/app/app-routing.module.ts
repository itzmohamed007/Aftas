import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionsComponent} from "./components/competitions/competitions.component";
import {MembersComponent} from "./components/members/members.component";
import {CompetitionComponent} from "./components/competition/competition.component";

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
    path: "competition/:code",
    component: CompetitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
