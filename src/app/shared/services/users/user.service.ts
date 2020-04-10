import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "app/shared/models/user/user.model";
import { MaestroUserModel } from "app/shared/models/user/maestro-user.model";
import { Observable } from "rxjs";
import { ResponseModel } from "app/shared/models/common/response.model";
import { UserFilterModel } from "app/shared/models/user/user.filter";
import { APIENDPOINT, WEB_STORAGE_KEYS } from "app/config/configuration";


@Injectable()
export class UserService  extends BaseService<UserModel> {

    private apiURL: string;
    private apiAUTH: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiAuth);
        this.apiURL = environment.apiGatewayURL;
        this.apiAUTH = environment.apiAuth;
    }

    getAllInfoUsersFilter(endPoint: string, object: UserFilterModel): Observable<ResponseModel<UserModel[]>>{
        const apiAUTH = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiAUTH, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<UserModel[]>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    getAllInfoUsersAvailablesFilter( object: any): Observable<ResponseModel<any[]>>{
        const apiURL = `${this.apiURL}${''}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<UserModel[]>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }
}
