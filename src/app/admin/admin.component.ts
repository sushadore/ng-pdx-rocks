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
  constructor(private memberService: MemberService) {}
// can this go away
  ngOnInit() {
  }

  submitForm(first: string, last: string, image: string, email: string, phone: string, preference: string, bio: string) {
    const newMember: Member = new Member(first, last, image, email, phone, preference, bio);
    this.memberService.addMember(newMember);
  }
}
