// Componentes
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { APIENDPOINT, MESSAGES, FILENAME } from "../../../config/configuration";
import { Router } from "@angular/router";

// Modelos
import * as _ from "underscore";

// Servicios
import { ToastrService } from "ngx-toastr";

import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

import { MudanzaService } from "app/shared/services/mudanzas/mudanza.service";
import { DomSanitizer } from "@angular/platform-browser";
import { DataService } from "app/shared/services/data/data.service";

@Component({
  selector: "create-mudanza",
  templateUrl: "create-mudanza.component.html",
  providers: [MudanzaService, DataService],
})
export class CreateMudanzaComponent implements OnInit {
  form: FormGroup;
  uploadedFiles: any[] = [];
  fileUrl;
  contentDownloadFile: string = "";
  fileName = FILENAME.dowloadFileName;

  @ViewChild("fileUpload") fileUpload: any;
  @ViewChild("urlFileDownload") set userContent(element) {
    if (element) {
      // here you get access only when element is rendered (or destroyed)
      setTimeout(() => {
        this.fileUrl = undefined;
      }, 10);
      document.getElementById("downloadFile").click();

    }
  }

  constructor(
    private fb: FormBuilder,
    private _mudanzaService: MudanzaService,
    private _toastrService: ToastrService,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private data: DataService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      IdentificationCard: new FormControl("", Validators.required),
      file: new FormControl("", Validators.required),
    });
  }

  myUploader(event): void {
    if (event.files[0].size == 0) {
      this._toastrService.warning(MESSAGES.EmptyFile, "");
      return;
    }

    if (this.form.controls["IdentificationCard"].value === "") {
      this.form.validator
      this._toastrService.warning(MESSAGES.validationMessage, "");
      return;
    }
   
    var fileToUpload = event.files[0];

    let input = new FormData();
    input.append("file", fileToUpload);
    input.append("IdentificationCard", this.form.controls["IdentificationCard"].value);
    this.data.showSpinner("true");

    this._mudanzaService
      .create(APIENDPOINT.uploadFile, input)
      .subscribe((response) => {
        if (response.header.reponseCode === 200) {
          // this._router.navigate([`/mudanza/list`]);
          setTimeout(() => {
            this.data.showSpinner("false");
          }, 500);
          this.downloadFile(response.data);
        } else {
          this._toastrService.error(response.header.message, "");
          setTimeout(() => {
            this.data.showSpinner("false");
          }, 500);
        }
      });
  }

  downloadFile(listWorkinDays: string[]) {
    for (let index = 0; index < listWorkinDays.length; index++) {
      this.contentDownloadFile += listWorkinDays[index] + "\n";
    }

    if (this.contentDownloadFile != "") {
      const blob = new Blob([this.contentDownloadFile], {
        type: "application/octet-stream",
      });

      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        window.URL.createObjectURL(blob)
      );
      this.clearFields();
      this._toastrService.success(MESSAGES.successMessage, "");
    }
  }

  clearFields() {
    this.form.reset();
    this.fileUpload.clear();
  }
}
