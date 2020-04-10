

// Modulos
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { ListMudanzaComponent } from './list/list-mudanza.component';
import { CreateMudanzaComponent } from './create/create-mudanza.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Mudanza'
    },
    children: [
      {
        path: 'create',
        component: CreateMudanzaComponent,
        data: {
          title: 'Crear Mudanza'
        }
      },
      {
        path: 'list',
        component: ListMudanzaComponent,
        data: {
          title: 'Listado Mudanza'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MudanzaRoutingModule {}

