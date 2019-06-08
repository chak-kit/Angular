import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (value === null || value === undefined ) {
      return args
    }else {
      return value
    }
  }

}
