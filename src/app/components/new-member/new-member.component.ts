import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";
import {MemberService} from "../../services/member.service";
@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent {
  memberForm: FormGroup
  errorMessages:string[] = []
  constructor(
    private formBuilder:FormBuilder,
    private service:MemberService,
    private router:Router
  ) {
    this.memberForm = this.formBuilder.group({
      num: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      familyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      nationality: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      identityDocument: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      identityNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  onsubmit() {
    this.errorMessages = []
    this.service.createMember(this.memberForm.value).subscribe({
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
