import { Pipe, PipeTransform } from '@angular/core';
import { Cinemas } from '../models/data';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: Cinemas[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => 
      item?.CinemaName?.toLowerCase().includes(searchTerm)
    );
  }

}
