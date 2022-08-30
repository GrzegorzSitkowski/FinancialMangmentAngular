import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AccountsListComponent } from './components/accounts/accounts-list/accounts-list.component';
import { AddAccountComponent } from './components/accounts/add-account/add-account.component';
import { EditAccountComponent } from './components/accounts/edit-account/edit-account.component';
import { AddGoalComponent } from './components/goals/add-goal/add-goal.component';
import { EditGoalComponent } from './components/goals/edit-goal/edit-goal.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { TransfersListComponent } from './components/transfers/transfers-list/transfers-list.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsListComponent
  },
  {
    path: 'accounts',
    component: AccountsListComponent
  },
  {
    path: 'accounts/add',
    component: AddAccountComponent
  },
  {
    path: 'accounts/edit/:id',
    component: EditAccountComponent
  },
  {
    path: 'goals',
    component: GoalsListComponent
  },
  {
    path: 'goals/add',
    component: AddGoalComponent
  },
  {
    path: 'goals/edit/:id',
    component: EditGoalComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'products/add',
    component: AddProductComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  },{
    path: 'transfers',
    component: TransfersListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
