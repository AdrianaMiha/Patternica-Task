import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './../interfaces/product.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foodList: Array<IProduct>, chosenFilter: string): unknown {
    if (!foodList) {
      return [];
    }
    if (!chosenFilter) {
      return foodList;
    }
    else {
      if (chosenFilter === 'toBuy') {
        return foodList.filter(food => food.isReady === false)
      }
      else if (chosenFilter === 'wasBought') {
        return foodList.filter(food => food.isReady === true)
      }
      else if (chosenFilter === '') {
        return foodList;
      }
    }

  }
}








