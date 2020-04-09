import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './routers/accounts.component';
import { fundsTransferComponent } from './routers/funds.component';
import { billPayComponent } from './routers/billpay.component';
import { offersComponent } from './routers/offers.component';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'fundsTransfer', component: fundsTransferComponent },
  { path: 'billPay', component: billPayComponent },
  { path: 'offers', component: offersComponent },
  { path: '**', redirectTo: '/accounts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
