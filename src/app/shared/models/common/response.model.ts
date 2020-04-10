import { HeaderResponseModel } from "./header-response.model";

export class ResponseModel<T> {
    public header: HeaderResponseModel;
    public data: T;
}
