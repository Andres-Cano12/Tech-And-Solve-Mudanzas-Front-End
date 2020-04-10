


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { UsersModel } from "../../models/dbo/users.model";
import { HttpClient } from "@angular/common/http";
import { MaestroUsersModel } from "../../models/dbo/maestro-users.model";

@Injectable()
export class UsersService  extends BaseService<UsersModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
