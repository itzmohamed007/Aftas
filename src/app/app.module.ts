import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { MembersComponent } from './components/members/members.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewCompetitionComponent } from './components/new-competition/new-competition.component';
import {DatePipe} from "@angular/common";
import { PodiumComponent } from './components/podium/podium.component';
import { NewMemberComponent } from './components/new-member/new-member.component';
import { CompetitionsTableComponent } from './components/competitions-table/competitions-table.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompetitionsComponent,
    MembersComponent,
    NewCompetitionComponent,
    PodiumComponent,
    NewMemberComponent,
    CompetitionsTableComponent,
    ManagerDashboardComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
