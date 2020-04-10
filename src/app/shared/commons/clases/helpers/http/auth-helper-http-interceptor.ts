import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';


@Injectable()
export class AuthHelpersInterceptor {
 constructor( private authService: AuthService ) {

 }

 logout() {
     this.authService.logout();
 }


 get accessToken() {
     return this.authService.accessToken;
 }

}
