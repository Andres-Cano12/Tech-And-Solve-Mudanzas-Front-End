import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { BaseService } from "../_base.service";
import { HttpClient } from "@angular/common/http";
import { FileMoveModel } from "app/shared/models/mudanza/file.model";

@Injectable()
export class MudanzaService  extends BaseService<any> {

    private apiURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
