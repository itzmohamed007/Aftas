import { Component } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent {
  testData: any[] = [
    {
      code: "saf-12-12-23",
      location: "safi",
      date: "15-12-2023",
      startTime: "09:41",
      endTime: "019:41",
      numberOfParticipants: 30
    },
    {
      code: "saf-13-12-23",
      location: "safi",
      date: "15-12-2023",
      startTime: "09:41",
      endTime: "019:41",
      numberOfParticipants: 20
    },
    {
      code: "saf-12-12-23",
      location: "location",
      date: "15-12-2023",
      startTime: "09:41",
      endTime: "019:41",
      numberOfParticipants: 15
    },
    {
      code: "saf-12-12-23",
      location: "location",
      date: "15-12-2023",
      startTime: "09:41",
      endTime: "019:41",
      numberOfParticipants: 25
    }
  ]
}
