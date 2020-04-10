import { FileModel } from '../../../models/common/file.model';
import { Component, Input } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// import { FileService } from '../../../services/file.service';
// import { ItemModel } from '../../../models/common/item.model';

@Component({
  selector: 'app-upload-files-container',
  templateUrl: './app-upload-files-container.component.html'
})
export class AppUploadFilesContainerComponent {
    // @Input() documentTypeList: Array<ItemModel>;
    // @Input() moduleS3: string = '';

    fileList: Array<FileModel> = new Array<FileModel>();

    constructor() { }

    ngOnInit() {
        this.addFiles();
    }

    // Agrega item al componente de arhivos
    private addFiles() {
        let fileItem: FileModel = new FileModel();
        this.fileList.push(fileItem);
    }
}
