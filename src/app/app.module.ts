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
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ItemSmallComponent } from './shared/item-small/item-small.component';
import { ReRouterComponent } from './re-router/re-router.component';
import { CostPipe } from './cost.pipe';

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
    PurchaseTicketComponent,
    NavbarComponent,
    ItemSmallComponent,
    ReRouterComponent,
    CostPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
