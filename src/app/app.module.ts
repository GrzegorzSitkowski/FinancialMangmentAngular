import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsListComponent } from './components/accounts/accounts-list/accounts-list.component';
import { AddAccountComponent } from './components/accounts/add-account/add-account.component';
import { EditAccountComponent } from './components/accounts/edit-account/edit-account.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';
import { AddGoalComponent } from './components/goals/add-goal/add-goal.component';
import { EditGoalComponent } from './components/goals/edit-goal/edit-goal.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { TransfersListComponent } from './components/transfers/transfers-list/transfers-list.component';
import { AddTransferComponent } from './components/transfers/add-transfer/add-transfer.component';
import { EditTransferComponent } from './components/transfers/edit-transfer/edit-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    AddAccountComponent,
    EditAccountComponent,
    GoalsListComponent,
    AddGoalComponent,
    EditGoalComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductComponent,
    TransfersListComponent,
    AddTransferComponent,
    EditTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
