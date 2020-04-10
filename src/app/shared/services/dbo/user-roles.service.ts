


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { UserRolesModel } from "../../models/dbo/user-roles.model";
import { HttpClient } from "@angular/common/http";
import { MaestroUserRolesModel } from "../../models/dbo/maestro-user-roles.model";

@Injectable()
export class UserRolesService  extends BaseService<UserRolesModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
