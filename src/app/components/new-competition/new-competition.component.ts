import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import {CompetitionService} from "../../services/competition.service";
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.component.html',
  styleUrls: ['./new-competition.component.css']
})
export class NewCompetitionComponent {
  competitionForm: FormGroup
  errorMessages:string[] = []
  constructor(
    private formBuilder:FormBuilder,
    private service:CompetitionService,
    private router:Router,
    private datePipe:DatePipe
  ) {
    this.competitionForm = this.formBuilder.group({
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(10)]],
      numberOfParticipants: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    });
  }

  onsubmit() {
    this.errorMessages = []
    const formattedDate = this.datePipe.transform(this.competitionForm.get('date')?.value, "dd-MM-yyyy");
    const competitionFormWithFormattedDate = {...this.competitionForm.value, date: formattedDate}
    this.service.createCompetition(competitionFormWithFormattedDate).subscribe({
      next: competition => this.router.navigate(["/competitions"]),
      error: err => {
        if (err.error) {
          Object.keys(err.error).forEach(key => {
            this.errorMessages.push(err.error[key]);
          });
          console.log(this.errorMessages)
        }
        console.log(err)
      }
    })
  }
}
