// Helpers
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIENDPOINT } from '../../../config/configuration';
import { S3Modules } from '../../../config/s3-modules';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { LoginModel } from '../../models/user/login.model';

@Component(
    {
        selector: 'app-verificar-usuario',
        templateUrl: './app-verificar-usuario.component.html'
    }
)
export class AppVerificarUsuarioComponent {
    loginModel: LoginModel = new LoginModel();

    @Output('verifyUser') verifyUser: EventEmitter<any> = new EventEmitter<any>();

    saveChange() {
        this.verifyUser.emit();
    }
}
