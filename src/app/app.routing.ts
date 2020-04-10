import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './shared/containers';

import { AuthAuthGuardService } from './shared/services/auth/auth-guard.service';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',

  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
     {
        path: 'mudanza',
        loadChildren: './views/mudanza/mudanza.module#MudanzaModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'dashboard',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      }
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthAuthGuardService
  ]
})
export class AppRoutingModule {}
