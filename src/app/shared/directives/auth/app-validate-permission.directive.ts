import { Directive, OnInit, ElementRef, Input, Renderer } from "@angular/core";
import { AuthService } from "app/shared/services/auth/auth.service";

@Directive({
    selector: '[appValidatePermission]'
})
export class AppValidatePermissionDirective implements OnInit {

    @Input("appValidatePermission") path: string;

    constructor(private element: ElementRef, private renderer: Renderer, private authService: AuthService) { }

    ngOnInit(): void {
        this.applyPermission();
    }

    applyPermission(): void {
        if(!this.authService.hasAuthorizationToPath(this.path))
        {
            this.renderer.setElementAttribute(this.element.nativeElement, 'disabled', 'disabled');            
        }
    }

}