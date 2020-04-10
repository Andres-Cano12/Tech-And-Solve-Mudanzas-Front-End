// Modulos
import { MatInputModule, MatAutocompleteModule} from '@angular/material';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
// ngPrime
import { OrderListModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule} from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';
import {DataViewModule} from 'primeng/dataview';
import {PaginatorModule} from 'primeng/paginator';
import { GrowlModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import {SpinnerModule} from 'primeng/spinner';
import {CheckboxModule} from 'primeng/checkbox';
import {GMapModule} from 'primeng/gmap';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { NgxCurrencyModule } from "ngx-currency";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
// PrimeNG


// Componentes
import { AppVerificarUsuarioComponent } from './components/app-verificar-usuario/app-verificar-usuario.component';
import { AppUploadFilesContainerComponent } from "./components/app-upload-files/app-upload-files-container/app-upload-files-container.component";
import { AppUploadFilesFieldsComponent } from './components/app-upload-files/app-upload-files-fields/app-upload-files-fields.component';
import { AppDeleteRegisterComponent } from './components/app-delete-register/app-delete-register.component';
import { AppFileUploadComponent } from './components/app-file-upload/app-file-upload.component';
import { AppDatePickerComponent } from './components/app-datepicker';
import { DateTimePickerComponent } from "./components/app-date-time-picker/date-time-picker.component";
import { AppFieldRequitedComponent } from './components/app-field-required/app-field-required.component';
import { FiltroCampoComponent } from './components/app-filter';
import { FiltroComponent } from "./components/app-filter/filtro";
import { ConfirmationDialogComponent } from './components/app-confirmation-dialog/app-confirmation-dialog.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { from } from 'rxjs';
import { AppValidatePermissionDirective } from './directives/auth/app-validate-permission.directive';
import { AppIfHasPermissionDirective } from './directives';
import { AppMapComponent, AppLoaderComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    MatInputModule,
    MatAutocompleteModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    OrderListModule,
    SidebarModule,
    ToolbarModule,
    SplitButtonModule,
    ToolbarModule,
    TabViewModule,
    CardModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    InputMaskModule,
    FileUploadModule,
    DataViewModule,
    PaginatorModule,
    GrowlModule,
    DialogModule,
    SpinnerModule,
    CheckboxModule,
    GMapModule,
    AutoCompleteModule,
    TableModule,
    NgxCurrencyModule,
    DynamicDialogModule,
    OverlayPanelModule,
    Ng2LoadingSpinnerModule.forRoot({
    }) 
  ],
  declarations: [
    AppDatePickerComponent,
    AppFileUploadComponent,
    AppDeleteRegisterComponent,
    AppUploadFilesContainerComponent,
    AppUploadFilesFieldsComponent,

    DateTimePickerComponent,
    AppVerificarUsuarioComponent,
    AppFieldRequitedComponent,
    FiltroCampoComponent,
    FiltroComponent,
    ConfirmationDialogComponent,
    AppValidatePermissionDirective,
    AppIfHasPermissionDirective,
    AppMapComponent,
    AppLoaderComponent
  ],
  exports: [
    ConfirmDialogModule,
    AppFileUploadComponent,
    CommonModule,
    AppDatePickerComponent,
    AppDeleteRegisterComponent,
    FormsModule,
    AppUploadFilesContainerComponent,
    AppUploadFilesFieldsComponent,
    DateTimePickerComponent,
    AppVerificarUsuarioComponent,
    AppFieldRequitedComponent,
    FiltroCampoComponent,
    FiltroComponent,
    OrderListModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    ToolbarModule,
    SplitButtonModule,
    ToolbarModule,
    TabViewModule,
    CardModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    InputMaskModule,
    FileUploadModule,
    DataViewModule,
    PaginatorModule,
    GrowlModule,
    DialogModule,
    SpinnerModule,
    CheckboxModule,
    GMapModule,
    AutoCompleteModule,
    ConfirmationDialogComponent,
    TableModule,
    TooltipModule,
    NgxCurrencyModule,
    DynamicDialogModule,
    OverlayPanelModule,
    AppValidatePermissionDirective,
    AppIfHasPermissionDirective,
    AppMapComponent,
    AppLoaderComponent
  ]
})

export class SharedModule { }
