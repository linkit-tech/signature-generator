import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingPosition'
})
export class LeadingPositionPipe implements PipeTransform {

  transform(ressortRole: any[], leadingRole: boolean): any {
    
    return ressortRole.filter(it => it["lead"] == leadingRole);
  }

}
