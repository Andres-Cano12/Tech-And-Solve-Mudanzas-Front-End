
export class PaginatioResponseModel<T> {
    public totalItems: number;
    public pageNumber: number;
    public pageSize: number;
    public list: T;
}
