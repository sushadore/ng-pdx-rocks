import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
   return this.members;
 }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember){
    var memberFirebaseEntry = this.getMemberById(localUpdatedMember.$key);
    memberFirebaseEntry.update({first: localUpdatedMember.first,
                                last: localUpdatedMember.last,
                                email: localUpdatedMember.email,
                                phone: localUpdatedMember.phone,
                                preference: localUpdatedMember.preference,
                                image: localUpdatedMember.image,
                                bio: localUpdatedMember.bio});
  }

  deleteMemeber(localMemeberToDelete){
    var memberFirebaseEntry = this.getMemberById(localMemeberToDelete.$key);
    memberFirebaseEntry.remove();
  }
}
