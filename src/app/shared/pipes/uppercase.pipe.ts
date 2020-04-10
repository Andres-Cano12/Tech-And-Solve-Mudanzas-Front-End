import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'uppercasePipe'})
export class UpppercasePipe implements PipeTransform {
    transform(text: string): string {

        return text.toUpperCase();
    }
}
