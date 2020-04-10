


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { RoleModel } from "../../models/dbo/role.model";
import { HttpClient } from "@angular/common/http";
import { MaestroRoleModel } from "../../models/dbo/maestro-role.model";

@Injectable()
export class RoleService  extends BaseService<RoleModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
