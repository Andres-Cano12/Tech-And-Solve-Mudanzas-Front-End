import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Directive({ selector: '[appIfHasPermission]'})
export class AppIfHasPermissionDirective implements OnInit{

    @Input('appIfHasPermission') section: string;

    constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

    ngOnInit(): void {
        if (this.authService.hasAuthorizationToPath(this.section)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}