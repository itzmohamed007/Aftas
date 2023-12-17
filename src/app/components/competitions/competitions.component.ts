import { Component } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent {
  testData: any[] = [
    {
      code: 'ABC123',
      location: 'Conference Room A',
      date: '2023-01-15',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
      numberOfParticipants: 25
    },
    {
      code: 'XYZ456',
      location: 'Training Hall B',
      date: '2023-02-20',
      startTime: '02:30 PM',
      endTime: '05:30 PM',
      numberOfParticipants: 40
    },
    {
      code: 'PQR789',
      location: 'Meeting Room C',
      date: '2023-03-10',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
      numberOfParticipants: 15
    },
    {
      code: 'DEF321',
      location: 'Seminar Hall D',
      date: '2023-04-05',
      startTime: '01:30 PM',
      endTime: '04:30 PM',
      numberOfParticipants: 30
    },
    {
      code: 'GHI654',
      location: 'Boardroom E',
      date: '2023-05-12',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
      numberOfParticipants: 20
    },
    {
      code: 'JKL987',
      location: 'Auditorium F',
      date: '2023-06-25',
      startTime: '03:00 PM',
      endTime: '06:00 PM',
      numberOfParticipants: 50
    }
  ]
}
