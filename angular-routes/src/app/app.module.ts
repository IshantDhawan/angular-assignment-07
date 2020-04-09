import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './routers/accounts.component';
import { fundsTransferComponent } from './routers/funds.component';
import { billPayComponent } from './routers/billpay.component';
import { offersComponent } from './routers/offers.component';

@NgModule({
  declarations: [
    AppComponent,AccountsComponent,fundsTransferComponent,billPayComponent,offersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
