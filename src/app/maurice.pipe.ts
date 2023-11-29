import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maurice',
  standalone: true
})
export class MauricePipe implements PipeTransform {

  transform(jokeValue: string): unknown {
    return jokeValue.replace('Norris', "Morris")
  }

}
