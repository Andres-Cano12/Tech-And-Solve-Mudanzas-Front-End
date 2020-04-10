


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { UserClaimsModel } from "../../models/dbo/user-claims.model";
import { HttpClient } from "@angular/common/http";
import { MaestroUserClaimsModel } from "../../models/dbo/maestro-user-claims.model";

@Injectable()
export class UserClaimsService  extends BaseService<UserClaimsModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
