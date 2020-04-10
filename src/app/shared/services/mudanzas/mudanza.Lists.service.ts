import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { HttpClient } from "@angular/common/http";
import { MoveModel } from "app/shared/models/mudanza/move.model";

@Injectable()
export class MudanzaListService  extends BaseService<MoveModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
