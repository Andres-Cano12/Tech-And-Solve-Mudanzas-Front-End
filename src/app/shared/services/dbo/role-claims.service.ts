


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { RoleClaimsModel } from "../../models/dbo/role-claims.model";
import { HttpClient } from "@angular/common/http";
import { MaestroRoleClaimsModel } from "../../models/dbo/maestro-role-claims.model";

@Injectable()
export class RoleClaimsService  extends BaseService<RoleClaimsModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
