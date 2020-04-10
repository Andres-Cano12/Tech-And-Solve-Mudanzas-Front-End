import { Injectable } from "@angular/core";


@Injectable()
export class WebStorageService{

    constructor(){}

    public setSessionStorage(key: string, value: string): void{
        sessionStorage.setItem(key, value);
    }

    public getSessionStorage(key: string): string{
        return sessionStorage.getItem(key);
    }

    public removeItemSessionStorage(key: string): void{
        sessionStorage.removeItem(key);
    }

    public clearSessionStorage(): void{
        sessionStorage.clear();
    }
    
    public setLocalStorage(key: string, value: string): void{
        localStorage.setItem(key, value);
    }

    public getLocalStorage(key: string): string{
        return localStorage.getItem(key);
    }

    public removeItemLocalStorage(key: string): void{
        localStorage.removeItem(key);
    }

    public clearLocalStorage(): void{
        localStorage.clear();
    }  

}