import { Component, Input } from '@angular/core';
import { Competition } from 'src/app/models/Competition';

@Component({
  selector: 'app-competitions-table',
  templateUrl: './competitions-table.component.html',
  styleUrls: ['./competitions-table.component.css']
})
export class CompetitionsTableComponent {
  @Input() competitions: Competition[] = []
}
