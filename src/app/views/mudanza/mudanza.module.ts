// Modulos
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../../shared/ShareModules';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Componentes
import { CreateMudanzaComponent } from './create/create-mudanza.component';
import { MudanzaRoutingModule } from './mudanza-routing.module';
import { ListMudanzaComponent } from './list/list-mudanza.component';


// Services
// import { MudanzaService } from 'app/shared/services/mudanzas/mudanza.service'

@NgModule({
  imports: [
    CommonModule,
    MudanzaRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    PaginationModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    CreateMudanzaComponent,
    ListMudanzaComponent,
  ],
  providers: [
    // MudanzaService,

  ]
})
export class MudanzaModule { }

