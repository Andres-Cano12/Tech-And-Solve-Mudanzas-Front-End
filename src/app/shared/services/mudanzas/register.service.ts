


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { HttpClient } from "@angular/common/http";
import { RegistrationViewModel } from "app/shared/models/user/registrationViewModel";

@Injectable()
export class RegistrationService  extends BaseService<RegistrationViewModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiAuth);
        this.apiURL = environment.apiAuth;
    }
}
