import { ItemModel } from "./item.model";
import { FilterModel } from "./filter.model";
import { OperatorModel } from "./operator.model";

export class ResponseFilterModel {
    public filterList: Array<FilterModel> = new Array<FilterModel>();
    public conditionList: Array<OperatorModel>;
    public pageQuantityList: Array<number>;
}
