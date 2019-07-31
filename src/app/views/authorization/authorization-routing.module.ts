import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCredencialsComponent } from './client-credencials.component';
import { AuthorizationCodeComponent } from './authorization-code.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Client Credencials'
    },
    children: [
//    {
//      path: '',
//      redirectTo: 'client-credencials'
//    },
      {
        path: 'client-credencials',
        component: ClientCredencialsComponent,
        data: {
          title: 'Client Credencials'
        }
      },
      {
        path: 'authorization-code',
        component: AuthorizationCodeComponent,
        data: {
          title: 'Autorization Code'
        }
      },
     
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
