import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ClientCredencial Component
import { ClientCredencialsComponent } from './client-credencials.component';

// AuthorizationCode Component
import { AuthorizationCodeComponent } from './authorization-code.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';


import { AuthorizationRoutingModule } from './authorization-routing.module';


@NgModule({
  declarations: [
  	ClientCredencialsComponent,
  	AuthorizationCodeComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    PopoverModule.forRoot()
  ]
})
export class AuthorizationModule { }