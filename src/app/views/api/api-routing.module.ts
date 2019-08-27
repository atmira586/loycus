import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciatePaymentComponent } from './iniciate-payment.component';
import { PaymentConfirmationComponent } from './payment-confirmation.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Iniciate Payment'
    },
    children: [
      {
        path: 'iniciate-payment',
        component: IniciatePaymentComponent,
        data: {
          title: 'Iniciate Payment'
        }
      },
      {
        path: 'payment-confirmation',
        component: PaymentConfirmationComponent,
        data: {
          title: 'Payment Confirmation'
        }
      },
     
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
