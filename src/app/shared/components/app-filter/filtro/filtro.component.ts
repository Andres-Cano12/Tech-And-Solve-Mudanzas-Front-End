import { Component, Input } from '@angular/core';

// Model
import { FilterParamsModel } from '../../../models/common/filter-params.model';
import { PaginationModel } from '../../../models/common/pagination.model';
import { ResponseFilterModel } from '../../../models/common/response-filter.model';

// Service
import { FilterService } from '../../../services/filter.service';
import * as _ from 'underscore';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'filtro-component',
    templateUrl: 'filtro.component.html'
})
export class FiltroComponent {
    @Input() paginationModel: PaginationModel;
    @Input() responseFilterModel: ResponseFilterModel;
    @Input() search: Function;

    filterParamsModel: FilterParamsModel = new FilterParamsModel();
    camposFiltro: Array<FilterParamsModel> = new Array<FilterParamsModel>();
    aux: Array<FilterParamsModel> = new Array<FilterParamsModel>();
    form: FormGroup;
    positions: SelectItem[] = [];

    constructor(
        private fb: FormBuilder,
        private _filterService: FilterService
    ) {

    };

    ngOnInit() {
        this.addFilter();
    };

    addFilter() {
        let nf: FilterParamsModel = new FilterParamsModel();
        this.camposFiltro.push(nf);
    }

    removeFilter(element: any) {
        this.camposFiltro.splice(element, 1);
    }

    getAllFilter() 
    {
        let lenghtFilter = this.camposFiltro.length;
        this.aux = this.camposFiltro;
         if(lenghtFilter > 0) 
         {
            this.validateProps();
         }
         this.camposFiltro = this.aux
         this.search(this.aux);
 
         if(this.aux.length == 0) {
             this.addFilter()
         }
    }

    validateProps () {
        for( let i = 0; i < this.camposFiltro.length; i ++)
        {
            if (!this.hasProp(this.camposFiltro[i], 'operator') 
                || !this.hasProp(this.camposFiltro[i], 'propertyName')
                || !this.hasProp(this.camposFiltro[i], 'value'))
            {
                this.aux =  this.deleteFilter(this.aux , this.camposFiltro[i])
                continue;
            }

            if(this.camposFiltro[i].operator =="" 
                || this.camposFiltro[i].operator == null
                || this.camposFiltro[i].propertyName ==""
                || this.camposFiltro[i].propertyName == null
                || this.camposFiltro[i].value ==""
                || this.camposFiltro[i].value == null
            ) {
                this.aux =  this.deleteFilter(this.aux , this.camposFiltro[i])
                continue;
            }
        }
        this.validateNumerics();
    }

    validateNumerics() {
        var filtered = _.filter(
        this.aux,
        function(i) { return this.values.indexOf(i.operator) > -1;  },
        { "values": ["GreaterThan", 
                        "Equals", 
                        "GreaterThanOrEqual", 
                        "LessThan", 
                        "LessThanOrEqualTo"] } /* "context" with values to look for */
        );
        for(let i = 0; i< filtered.length; i++) {
            if( !filtered[i].value.match(/^[\d]+$/) )
            {
               this.aux =  this.deleteFilter(this.aux , filtered[i])
            }
        }
    }

    hasProp (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    deleteFilter (array, row)
    {
        array =  _.without(array, row)
        return array
    } 
}
