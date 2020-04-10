import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIENDPOINT } from '../../../config/configuration';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-register',
  templateUrl: './app-delete-register.component.html'
})
export class AppDeleteRegisterComponent {
    @Input() message: string;

    @Output('deleteItem') delete: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    deleteItem() {
        this.delete.emit();
    }
}
