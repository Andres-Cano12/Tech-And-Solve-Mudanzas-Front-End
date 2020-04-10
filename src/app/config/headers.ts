import { Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

export class HeadersConfig {
    public headers: Headers;
    public httpHeaders: HttpHeaders;
    constructor() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

        this.httpHeaders = new HttpHeaders();
        this.httpHeaders.set('Content-Type', 'application/json');
    }
}
