


import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { ClaimModel } from "../../models/dbo/claim.model";
import { HttpClient } from "@angular/common/http";
import { MaestroClaimModel } from "../../models/dbo/maestro-claim.model";

@Injectable()
export class ClaimService  extends BaseService<ClaimModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
