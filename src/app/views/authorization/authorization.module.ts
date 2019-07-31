import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCredencialsComponent } from './client-credencials.component';
import { AuthorizationCodeComponent } from './authorization-code.component';

import { AuthorizationRoutingModule } from './authorization-routing.module';


@NgModule({
  declarations: [
  	ClientCredencialsComponent,
  	AuthorizationCodeComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
