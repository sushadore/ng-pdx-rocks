import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'preference',
  pure: false
})
export class PreferencePipe implements PipeTransform {
  transform(input: Member[], memberPreference) {
    var output: Member[] = [];
    if(memberPreference === "topRopeMembers") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].preference === "top-rope") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(memberPreference === "boulderMembers") {
        for (var i = 0; i < input.length; i++) {
          if(input[i].preference === "boulder") {
            output.push(input[i]);
          }
        }
      return output;
    } else if(memberPreference === "leadMembers") {
        for (var i = 0; i < input.length; i++) {
          if(input[i].preference === "lead") {
            output.push(input[i]);
          }
        }
      return output;
    } else if(memberPreference === "tradMembers") {
        for (var i = 0; i < input.length; i++) {
          if(input[i].preference === "trad") {
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
