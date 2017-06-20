import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) {}
// CAN this go away?
  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete) {
    if (confirm('Are you sure you want to delete this member from the roster?')) {
      this.memberService.deleteMemeber(memberToDelete);
    }
  }
}
