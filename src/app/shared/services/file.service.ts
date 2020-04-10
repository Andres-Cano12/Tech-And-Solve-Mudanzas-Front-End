// Componentes
import { APIENDPOINT } from '../../config/configuration';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

// Modelos
import { ResponseModel } from '../models/common/response.model';
import { FileModel } from '../models/common/file.model';

// Servicios
import { BaseService } from './_base.service';

@Injectable()
export class FileService extends BaseService<FileModel> {
    private apiFileURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiFileURL = environment.apiGatewayURL;
    }


}
