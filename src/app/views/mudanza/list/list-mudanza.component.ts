// Componentes
import { Component, ViewChild, OnInit } from "@angular/core";
import { APIENDPOINT, FILENAME, MESSAGES } from "../../../config/configuration";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import * as _ from "underscore";
import * as $ from "jquery";

// Constants

// Modelos
import { PaginatioResponseModel } from "app/shared/models/common/pagination-response.model";
import { PaginationModel } from "app/shared/models/common/pagination.model";

// Servicios

import { ToastrService } from "ngx-toastr";
import { DataTable, LazyLoadEvent } from "primeng/primeng";
import { Router } from "@angular/router";
import { MudanzaListService } from "app/shared/services/mudanzas/mudanza.Lists.service";
import { MoveModel } from "app/shared/models/mudanza/move.model";
import { MudanzaService } from "app/shared/services/mudanzas/mudanza.service";
import { DomSanitizer } from "@angular/platform-browser";
import { DataService } from "app/shared/services/data/data.service";

@Component({
  templateUrl: "list-mudanza.component.html",
  providers: [MudanzaListService, MudanzaService],
})
export class ListMudanzaComponent implements OnInit {
  @ViewChild("table") table: DataTable;

  paginationModel: PaginationModel = new PaginationModel();
  results: PaginatioResponseModel<MoveModel[]> = new PaginatioResponseModel<
    MoveModel[]
  >();
  cols: any[];
  totalRecords: number;
  fileUrl;
  contentDownloadFile: string = "";
  fileName = FILENAME.dowloadFileName;
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
    private _toastrService: ToastrService,
    private _router: Router,
    private _mudanzaService: MudanzaListService,
    private _mudanzaFile: MudanzaService,
    private sanitizer: DomSanitizer,
    private data: DataService
  ) {
    this.results.list = [];
    this.data.showSpinner("true");
    this.paginationModel.pageNumber = 1;
    this.paginationModel.pageSize = 10;
    this.paginationModel.sortProperty = "identificationCard";
    this.paginationModel.sortType = "identificationCard";
    this.paginationModel.sortType = "asc";
  }

  ngOnInit() {
    this.cols = [
      { field: "idMove", header: "Número de registro" },
      { field: "identificationCard", header: "Número de documento" },
      { field: "dateMove", header: "Fecha de registro" },
    ];
    this.getAll();
  }

  getAll() {

    this._mudanzaService
      .getAll(APIENDPOINT.getAllMove)
      .subscribe((response) => {
        if (response.header.reponseCode === 200) {
          this.results.list = response.data;
          setTimeout(() => {
            this.data.showSpinner("false");
          }, 1000);
        } else {
          setTimeout(() => {
            this.data.showSpinner("false");
          }, 1000);
          this._toastrService.error(response.header.message, "");
        }
        // this.showSpinner = false;
      });
  }

  getFile(moveModel: MoveModel) {
    if (moveModel === undefined || moveModel === null) return;
    this.data.showSpinner("true");
    this._mudanzaFile
      .getDetails(APIENDPOINT.getAllDetailsMove, String(moveModel.idMove))
      .subscribe((response) => {
        if (response.header.reponseCode === 200) {
          setTimeout(() => {
            this.data.showSpinner("false");
          }, 1000);
          this.downloadFile(response.data);
        } else {
          setTimeout(() => {
            this.data.showSpinner("false");
          }, 1000);
          this._toastrService.error(response.header.message, "");
        }
        // this.showSpinner = false;
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

      this._toastrService.success(MESSAGES.successFileMessage, "");
    }
  }

  loadLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
  }
}
