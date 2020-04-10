import { Injectable } from '@angular/core';
import { DataService, CustomInterceptor } from '../../services/base/base.service';
import { environment } from 'environments/environment';

@Injectable()

export class Configuration
{
    
    public Server = environment.apiGatewayURL;
    public ApiUrl = 'api/';
    public ServerWithApiUrl = "";
    constructor() 
    {
         this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
}

