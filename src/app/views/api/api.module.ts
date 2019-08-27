import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Iniciate Payment Component
import { IniciatePaymentComponent } from './iniciate-payment.component';

// Payment Confirmation Component
import { PaymentConfirmationComponent } from './payment-confirmation.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

import { ApiRoutingModule } from './api-routing.module';




@NgModule({
  declarations: [
  	IniciatePaymentComponent,
  	PaymentConfirmationComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    PopoverModule.forRoot()
  ]
})
export class ApiModule { }
