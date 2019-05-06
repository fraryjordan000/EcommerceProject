import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

import { AuthGuard } from './auth.guard';
import { ReRouterComponent } from './re-router/re-router.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'search/:item', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'reroute/:url', component: ReRouterComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
