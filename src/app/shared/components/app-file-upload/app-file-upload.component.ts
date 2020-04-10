import { FileModel } from '../../models/common/file.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { DateModel } from '../../models/common/date.model';
import { APIENDPOINT } from '../../../config/configuration';
import { ToastrService } from 'ngx-toastr';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './app-file-upload.component.html'
})
export class AppFileUploadComponent {
  
  @Input() propertyName: string = '';
  @Input() public fileName: string = '';
  fileExtension: string = '';
  fileChanged:boolean = false;

  fileModel: FileModel =  new FileModel();

  constructor(
    private _fileUploadService: FileService,
    private toastr: ToastrService,
  ) { }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
        const reader = new FileReader();
        this.fileExtension = file.name.split('.').pop();
        this.fileName = file.name;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);

    this.fileModel.fileData = base64textString;
    this.fileModel.fileExtension = this.fileExtension;
    this.fileModel.fileName = this.fileName;
    this.fileModel.propertyName=this.propertyName;
    this.fileChanged = true;
  }
}
