import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { HttpClient } from "@angular/common/http";
import { MaestroRoleModel } from "app/shared/models/role/maestro-role.model";
import { RoleModel } from "app/shared/models/dbo/role.model";

@Injectable()
export class UserRoleService  extends BaseService<RoleModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiAuth);
        this.apiURL = environment.apiAuth;
    }
}
