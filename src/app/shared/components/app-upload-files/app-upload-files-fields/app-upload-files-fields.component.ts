// Componentes
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Modelos
import { ItemModel } from '../../../models/common/item.model';
import { FileModel } from '../../../models/common/file.model';

@Component({
  selector: 'app-upload-files-fields',
  templateUrl: './app-upload-files-fields.component.html'
})
export class AppUploadFilesFieldsComponent {
    private fileExtension: string = '';

    // @Input() documentTypeList: Array<ItemModel>;
    @Input() item: FileModel = new FileModel();
    // @Input() moduleS3: string;
    @Input('index') index: Number;

    @Output ('deleted') deleted = new EventEmitter();

    constructor() { }

    // Emite el evento para eliminar el componente
    removeFilter(i: number): void {
        this.deleted.emit(i);
    }

    // Obtiene el archivo seleccionado
    handleFileSelect(evt) {
        const files = evt.target.files;
        const file = files[0];

        if (files && file) {
            const reader = new FileReader();
            this.fileExtension = file.name.split('.').pop();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    // Convierte el archivo a Base64 y asigna los datos al modelo
    _handleReaderLoaded(readerEvt: any) {
        const binaryString = readerEvt.target.result;
        const base64textString = btoa(binaryString);

        // this.item.module = this.moduleS3;
        this.item.fileData = base64textString;
        this.item.fileExtension = this.fileExtension;
        // this.item.documentTypeName = this.documentTypeList.find(dt => dt.id === String(this.item.documentTypeId)).value;
    }
}
