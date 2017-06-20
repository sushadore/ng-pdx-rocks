import { Component } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent {
  constructor(private memberService: MemberService) {}

  submitForm(first: string, last: string, image: string, email: string, phone: string, preference: string, bio: string) {
    const newMember: Member = new Member(first, last, image, email, phone, preference, bio);
    this.memberService.addMember(newMember);
  }
}
