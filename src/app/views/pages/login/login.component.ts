// Component
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validator, FormBuilder, Validators } from '@angular/forms';

// Model
import { LoginModel } from '../../../shared/models/user/login.model'
import { TokenModel } from '../../../shared/models/auth/token.model'

// Service
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CountryModel } from 'app/shared/models/countries/country.model';
import { UserModel } from 'app/shared/models/user/user.model';
import { APIENDPOINT, WEB_STORAGE_KEYS, AUTH_URLS } from 'app/config/configuration';
import { WebStorageService } from 'app/shared/services/common/webStorage.service';
import { UserRoleEnum } from 'app/shared/enums/user-role-enum';
import { CredentialsViewModel } from 'app/shared/models/user/credentialsViewModel';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: CredentialsViewModel = new CredentialsViewModel();
  loginForm: FormGroup;
  serviceError: string;
  isLoaded: boolean = true;
  showSpinner: boolean = false;
  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public get registerUrl() { return AUTH_URLS.REGISTER_URL; }

  createForm(): any {
    this.loginForm = this._formBuilder.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }


  public onSubmit(): void {
    this.showSpinner = true;
    this.isLoaded = false;
    this.serviceError = null;
    this.credentials = this.loginForm.value as CredentialsViewModel;
    this._authService.login(APIENDPOINT.LOGIN, this.credentials)
      .subscribe(resp => {
        this._router.navigate([this._authService.homeUrl]);
        this.showSpinner = false;
      }, error => {
        this.isLoaded = true;
        this.serviceError = error.error;
        this.showSpinner = false;
      });
  }

  handleClick() {
    this._router.navigate([this.registerUrl]);
  }
}
