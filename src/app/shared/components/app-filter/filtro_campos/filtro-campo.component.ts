import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseFilterModel } from '../../../models/common/response-filter.model';
import { FilterParamsModel } from '../../../models/common/filter-params.model';
import { ItemModel } from '../../../models/common/item.model';
import { OperatorModel } from '../../../models/common/operator.model';

@Component({
    selector: 'filtro-campo-component',
    templateUrl: 'filtro-campo.component.html'
})

export class FiltroCampoComponent {
    @Input() item: FilterParamsModel = new FilterParamsModel();
    @Input() responseFilterModel: ResponseFilterModel;
    @Input('index') index: Number;
    @Output ('deleted') deleted = new EventEmitter();
    conditionList: Array<OperatorModel>;

    removeFilter(i: number): void {
        this.deleted.emit(i);
    }

    changeOperator(): void {
        this.conditionList = new Array<OperatorModel>();
        // Tipo de dato del campo seleccionado
        const fieldFormat = this.responseFilterModel.filterList
        .find(f => f.propertyName === this.item.propertyName).propertyFormat;

        // Agrega los operadores permitidos para el campo seleccionado
        this.conditionList = this.responseFilterModel.conditionList.filter((key) => {
            if (key.typeValue === fieldFormat || key.typeValue === 'any') {
                return key
            };
        })
    }
}
