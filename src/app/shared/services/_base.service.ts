import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from 'environments/environment';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { DeleteModel } from '../models/common/delete.model';
import { ResponseModel } from '../models/common/response.model';
import { HeadersConfig } from '../../config/headers';
import { HttpClient } from '@angular/common/http';
import { PaginationModel } from '../models/common/pagination.model';
import { PaginatioResponseModel } from '../models/common/pagination-response.model';
import { FileRequestModel } from '../models/repositorio/file-request.model';
import { FileModel } from '../models/common/file.model';

export abstract class BaseService<TModel> {

    public headersConfig: HeadersConfig = new HeadersConfig();
    public responseModel: ResponseModel<any>;


    constructor(protected _httpClient: HttpClient, protected _apiRoot: string = environment.apiGatewayURL) {
        this.responseModel = new ResponseModel;
    };

    get(endPoint: string): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        })

    };

    getAll(endPoint: string): Observable<ResponseModel<TModel[]>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel[]>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };


    getAllparams(endPoint: string,  object: TModel): Observable<ResponseModel<TModel[]>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.get(apiURL, object).map((resp: ResponseModel<TModel[]>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    getAllPag(endPoint: string, object: PaginationModel): Observable<ResponseModel<PaginatioResponseModel<TModel[]>>> {        
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<PaginatioResponseModel<TModel[]>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    getAllPagByUser(endPoint: string, object: PaginationModel, object2: TModel): Observable<ResponseModel<PaginatioResponseModel<TModel[]>>> {        
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<PaginatioResponseModel<TModel[]>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    getAllRep(endPoint: string, object: TModel): Observable<ResponseModel<PaginatioResponseModel<TModel[]>>> {        
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<PaginatioResponseModel<TModel[]>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }


    getAllPagById(endPoint: string, object: PaginationModel, ): Observable<ResponseModel<PaginatioResponseModel<TModel[]>>> {        
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<PaginatioResponseModel<TModel[]>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    getDetails(endPoint: string, query: string): Observable<ResponseModel<TModel>> {        
        const apiURL = `${this._apiRoot}${endPoint}${query}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    getAllById(endPoint: string, query: string): Observable<ResponseModel<TModel[]>> {        
        const apiURL = `${this._apiRoot}${endPoint}${query}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    getAllByIdWithPagination(endPoint: string, query: string): Observable<ResponseModel<TModel[]>> {        
        const apiURL = `${this._apiRoot}${endPoint}${query}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    create(endPoint: string, object: TModel): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    post<RModel>(endPoint: string, object): Observable<ResponseModel<RModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map(( resp: ResponseModel<RModel> ) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    update(endPoint: string, object: TModel): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    delete(endPoint: string, object: DeleteModel): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    saveMultipleFiles(endPoint: string, fileRequestModel: Array<FileModel>): Observable<ResponseModel<string>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, fileRequestModel, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<string>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    private handleResponse(resp: Response): any {
        const headerResp = resp.json().header;
        if (headerResp.reponseCode === 200) {
            return resp.json().data;
        } else {
            return Observable.throw(headerResp.message);
        }
    };

    private convertToJSON(object: any) {
        return JSON.stringify(object);
    };
}
