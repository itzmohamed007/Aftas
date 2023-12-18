import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../services/member.service";
import {Member} from "../../models/Member";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members:Member[] = [];
  constructor(private service:MemberService) {}
  ngOnInit(): void {
    this.loadMembers()
  }
  loadMembers() {
    this.service.getMembers().subscribe({
      next: members => {
        this.members = members;
        console.log(members)
      },
      error: err => {
        console.log("an error occurred while fetching members");
        console.log(err)
      }
    })
  }

}
