import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { CanActivateChild, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Route } from "@angular/compiler/src/core";


@Injectable()
export class AuthAuthGuardService implements CanActivate, CanActivateChild, CanLoad{
    
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(
        private _auth: AuthService, 
        private router: Router){};

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
	}

	canLoad(route: Route): boolean {
        throw new Error("Method not implemented.");
	}


    checkLogin(url: string): boolean {

        if(this._auth.isLoggedIn){
            return true;
        }
        this.router.navigate([this._auth.loginUrl]);
    }
}