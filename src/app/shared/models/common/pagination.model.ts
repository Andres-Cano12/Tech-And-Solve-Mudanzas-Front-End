import { FilterParamsModel } from './filter-params.model';

export class PaginationModel {
    public pageNumber: number;
    public pageSize: number;
    public sortProperty: string;
    public sortType: string;
    public filters: Array<FilterParamsModel> = new Array<FilterParamsModel>();
    public countryId: number;
}
