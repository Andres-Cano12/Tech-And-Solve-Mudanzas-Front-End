import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
// PrimeNG
//import {ConfirmDialogModule} from 'primeng/confirmdialog';
//import { ConfirmDialogModule, ConfirmationService, SharedModule } from 'primeng/primeng';
// import {ConfirmationService} from 'primeng/api';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './shared/containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './shared/components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './shared/directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Modulos
import { StoreManager } from './shared/commons/clases/helpers/services/store-manager.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastContainerModule  } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from './shared/ShareModules';
import { AppRoutingModule } from './app.routing';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Registramos el idioma a mostrar para las fechas
import localeEsCo from '@angular/common/locales/es-CO';
registerLocaleData(localeEsCo);

// Services
import { RequestInterceptorService } from './shared/commons/clases/helpers/services/request-interceptor.service';

import { FilterService } from './shared/services/filter.service';
import { BaseService } from './shared/services/_base.service';
import { AuthService } from './shared/services/auth/auth.service';
import { FileService } from './shared/services/file.service';
import { HelperService } from './shared/services/helper.service';
import { ConfirmationDialogComponent } from './shared/components/app-confirmation-dialog/app-confirmation-dialog.component';
import { ConfirmationDialogService } from './shared/components/app-confirmation-dialog/app-confirmation-dialog.service';
import { WebStorageService } from './shared/services/common/webStorage.service';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'

@NgModule({
  imports: [    
    HttpClientModule,
    Ng2LoadingSpinnerModule.forRoot({}),
    BrowserModule,
    NgxSmartModalModule.forRoot(),
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    NgbModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule,
    //ConfirmDialogModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      closeButton: true,
      preventDuplicates: false,
      enableHtml: true
    }),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  providers: [    NgxSmartModalService,{
      provide: LocationStrategy,      
      useClass: HashLocationStrategy,
  
    },
    //ConfirmationService,
    { provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    { provide: LOCALE_ID,
      useValue: 'es-CO'
    },
    FilterService,
    AuthService,
    FileService,
    HelperService,
    StoreManager,
    ConfirmationDialogService,
    WebStorageService
  ],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
