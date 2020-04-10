// Helpers
import { Component, ViewChild, Input, Output } from '@angular/core';
import { S3Modules } from '../../../config/s3-modules';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { RepositorioModel } from '../../models/repositorio/repositorio.model';
import { RepositorioService } from '../../services/repositorio.service';
import { ToastrService } from 'ngx-toastr';
import { FileModel } from '../../models/common/file.model';
import { APIENDPOINT } from '../../../config/configuration';
import { DeleteModel } from '../../models/common/delete.model';
import { EventEmitter } from 'events';
import { RepositorioRequestModel } from '../../models/repositorio/repositorio-request.model';

@Component({
    selector: 'app-view-files',
    templateUrl: './app-view-files.component.html'
})
export class AppViewFilesComponent {
    @Input() repositorioRequestModel: RepositorioRequestModel = new RepositorioRequestModel();
    @Input() s3Module: string;

    repositorioList: Array<RepositorioModel> = new Array<RepositorioModel>();
    // s3Route: string = environment.filesURL;
    s3Route: string = '';
    repositorioDetalleId: number;
    fileName: string;
    result: boolean;

    constructor(
        private _repositorioService: RepositorioService,
        private _toastr: ToastrService
    ) {
    }

    ngOnInit() {
    
    }



    // Asigna los valores para eliminar un archivo
    setIdRepository(id: number, file: string) {
        this.repositorioDetalleId = id;
        this.fileName = file;
    }


}
