import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionsComponent} from "./components/competitions/competitions.component";
import {MembersComponent} from "./components/members/members.component";
import {NewCompetitionComponent} from "./components/new-competition/new-competition.component";
import {PodiumComponent} from "./components/podium/podium.component";
import {NewMemberComponent} from "./components/new-member/new-member.component";
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
  },
  {
    path: "new-member",
    component: NewMemberComponent
  },
  {
    path: "manager/dashboard",
    component: ManagerDashboardComponent
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
