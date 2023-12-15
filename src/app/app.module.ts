import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { MembersComponent } from './components/members/members.component';
import { CompetitionComponent } from './components/competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompetitionsComponent,
    MembersComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
