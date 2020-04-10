import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { PaginationModel } from "../../models/common/pagination.model";
import { ResponseFilterModel } from "../../models/common/response-filter.model";
import { NgxSmartModalService } from "ngx-smart-modal";
import { ANIMATION_TYPES } from "ng2-loading-spinner";
import { INg2LoadingSpinnerConfig } from "ng2-loading-spinner";
import { DataService } from "app/shared/services/data/data.service";
import { CreateMudanzaComponent } from "../../../views/mudanza/create/create-mudanza.component";
import { ChangeDetectionStrategy } from "@angular/compiler/src/core";

@Component({

  selector: "app-dashboard",
  templateUrl: "./full-layout.component.html",
  providers: [DataService],
})
export class FullLayoutComponent {
  showSpinners = false;
  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType: ANIMATION_TYPES.cubeGrid,
    spinnerPosition: "center",
    backdropBorderRadius: "15px",
    spinnerSize: "md",
    spinnerFontSize: "2rem",
  };

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private data: DataService,
    private cdr: ChangeDetectorRef
  ) {
    this.data.showSpinner("false");
  }

  showSpinner() {
    this.cdr.markForCheck();
    return this.data.getShowSpinner();
  }
}
