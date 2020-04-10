//Referencia encontrada en:
//https://offering.solutions/blog/articles/2016/02/01/consuming-a-rest-api-with-angular-http-service-in-typescript/
import 'rxjs/add/operator/map';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import { Configuration } from '../../models/common/configuracion.model';
import { Console } from '@angular/core/src/console';

@Injectable()
export class DataService {    
    public actionUrl: string;
   
    constructor(private http: HttpClient, private _configuration: Configuration) {
    }


    public getAllxId<T>(id: any): Observable<T> {
        return this.http.get<T>(this.actionUrl + '/'+ id);
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: any): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }


    public add<T>(model: any): Observable<T> {
        return this.http.post<T>(this.actionUrl, model);
    }

    public addList<T>(model: any[]): Observable<T> {
        return this.http.post<T>(this.actionUrl, model);
    }

    public update<T>(id: any, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + 'put?nombre='  + id, '');
    }

    public updateList<T>(id: number, itemToUpdate: any[]): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + '?id='  + id, itemToUpdate);
    }

    public updateModel<T>(id: any, itemToUpdate: any): Observable<T> {

        return this.http
            .put<T>(this.actionUrl + '?id='  + id, itemToUpdate);
    }

    public delete<T>(id: number, nombre: string): Observable<T> {
        return this.http.delete<T>(this.actionUrl + '?id='  + id + '&nombre=' + nombre);
    }

    public getSingleById<T>(id: any, nombre: any): Observable<T> {
        return this.http.get<T>(this.actionUrl + '?nombreUsuario='  + id + '&Clave=' + nombre);
    }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    private _pending = new Subject();
    private _pendingRequests: number = 0;


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        // console.log(JSON.stringify(req.headers));
        this._requestStarted();

        return next.handle(req).finally(
            () => this._requestEnded()
        );
    }

    private _requestStarted() {
        this._pending.next({
            started: this._pendingRequests === 0,
            pendingRequests: ++this._pendingRequests,
        });
    }

    private _requestEnded() {
        this._pending.next({
            completed: this._pendingRequests === 1,
            pendingRequests: --this._pendingRequests,
        });
    }
}
