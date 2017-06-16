import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  submitForm(first: string, last:string, email: string, phone: string, preference: string, image: string, bio: string) {
    var newMember: Member = new Member(first, last, email, phone, preference, image, bio);
    this.memberService.addMember(newMember);
  }
}
