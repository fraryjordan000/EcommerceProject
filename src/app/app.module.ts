import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './shared/item/item.component';
import { ItemInCartComponent } from './shared/item-in-cart/item-in-cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { PurchaseTicketComponent } from './shared/purchase-ticket/purchase-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemInCartComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    DetailsComponent,
    SearchComponent,
    AccountComponent,
    PurchaseTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
