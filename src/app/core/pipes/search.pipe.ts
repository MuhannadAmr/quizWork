import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '../../core/interfaces/user-data'
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUser: UserData[], idNumber: string): UserData[] {
    return allUser.filter((user)=>user?.id?.toString().includes(idNumber));
  }

}
