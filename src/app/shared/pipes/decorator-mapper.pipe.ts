import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from '../models/common/item.model';

@Pipe({name: 'decoratorMapper'})
export class DecoratorMapperPipe implements PipeTransform {
    transform(id: any = 0, list: Array<ItemModel>): string {

        if (id == null || list == null) {
            return '';
        }
        let item = list.find(c => c.id === String(id));

        return item ? item.value : '';
    }
}
