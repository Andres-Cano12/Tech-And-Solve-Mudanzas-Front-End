// Componentes
import { APIENDPOINT } from '../../config/configuration';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// Modelos
import { RepositorioRequestModel } from '../models/repositorio/repositorio-request.model';
import { RepositorioModel } from '../models/repositorio/repositorio.model';
import { ResponseModel } from '../models/common/response.model';
import { FileModel } from '../models/common/file.model';

// Servicios
import { BaseService } from './_base.service';
import { FileRequestModel } from '../models/repositorio/file-request.model';
import { ExcelGeneratorModel } from '../models/common/excel-generator.model';
import { FileGeneratorModel } from '../models/repositorio/file-generator.model';
import { ImageDelegadoModel } from '../models/repositorio/image-delegado.model';

@Injectable()
export class RepositorioService extends BaseService<RepositorioModel> {    
    private apiRepositorioURL: string;

    constructor(protected _http: HttpClient) {
        super(_http, environment.apiGatewayURL);
        this.apiRepositorioURL = environment.apiGatewayURL;
    }



    saveRepository(endPoint: string, repositorioModel: Array<RepositorioModel>): Observable<ResponseModel<Array<RepositorioModel>>> {
        const apiURL = `${this._apiRoot}${endPoint}`;

        return this._http.post(apiURL, repositorioModel, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<Array<RepositorioModel>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    findByFilter(endPoint: string, repositorioRequestModel: RepositorioRequestModel): Observable<ResponseModel<Array<RepositorioModel>>> {
        const apiURL = `${this._apiRoot}${endPoint}`;

        return this._http.post(apiURL, repositorioRequestModel, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<Array<RepositorioModel>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    deleteS3(endPoint: string, fileList: Array<FileModel>): Observable<ResponseModel<boolean>> {
        const apiURL = `${this._apiRoot}${endPoint}`;

        return this._http.post(apiURL, fileList, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<boolean>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    exportExcel(endPoint: string, excelGeneratorModel: FileGeneratorModel): Observable<ResponseModel<any>> {
        const apiURL = `${this._apiRoot}${endPoint}`;

        return this._http.post(apiURL, excelGeneratorModel, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<any>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    getImageProfile(endPoint: string, clienteId: number): Observable<ResponseModel<string>> {
        const apiURL = `${this._apiRoot}${endPoint}${clienteId}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<string>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    getImagesDelegados(endPoint: string, clienteIds: Array<number>): Observable<ResponseModel<Array<ImageDelegadoModel>>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._http.post(apiURL, clienteIds, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<Array<ImageDelegadoModel>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };
}
