import {AuthService} from '../../../../services/auth/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/finally';
import { Router } from '@angular/router';

// import { StoreManager } from 'app/shared/helpers/services/store-manager.service';
// import { AuthHelpersInterceptor } from 'app/shared/helpers/http/auth-helper-http-interceptor';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor( private authService: AuthService  ) {

    }

    addToken(req: HttpRequest<any>): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: `Bearer ${this.authService.accessToken}`}});
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
    // HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   console.log('en intercept');
        return next.handle(this.addToken(req));
            // .catch(error => {
            // //   console.log('en error');
            //     if (error instanceof HttpErrorResponse) {
            //         // console.log('en HttpErrorResponse');
            //         switch ((<HttpErrorResponse>error).status) {
            //             // Error en la validacion del token
            //             case 401:
            //             // console.log('en 401');
            //                 return this.handle401Error(error);
            //             // Error por que se necesita refrescar el token
            //             case 406:
            //             // console.log('en 406');
            //                 return this.handle406Error(req, next);
            //         }
            //     } else {
            //         return Observable.throw(error);
            //     }
            // });
    }

    handle406Error(req: HttpRequest<any>, next: HttpHandler) {
      /*  if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;


            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);

            return this.authService.refreshLogin()
                .switchMap((res) => {

                    if (res.user_name) {
                        // try send all request
                        this.tokenSubject.next('true');
                        // console.log("Antes handle token refresh");
                        return next.handle(this.addToken(req));
                    }

                    // If we don't get a new token, we are in trouble so logout.
                    this.logoutUser();
                })
                .catch(error => {
                    // If there is an exception calling 'refreshToken', bad news so logout.
                    this.logoutUser();
                    return error;
                })
                .finally(() => {
                    this.isRefreshingToken = false;
                });
        } else {
            return this.tokenSubject
                .filter(token => token != null)
                //.take(1)
                .switchMap(token => {
                    return next.handle(this.addToken(req));
                });
        }*/
    }

    handle401Error(error) {
        if (error && error.status === 401) {

            // console.log('en 401 error if');
            this.logoutUser();
        }
        return Observable.throw(error);
    }

    private logoutUser() {
        this.authService.logout();
    }
}
