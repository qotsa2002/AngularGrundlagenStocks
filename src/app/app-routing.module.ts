import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { NewStockComponent } from './new-stock/new-stock.component';

const routes: Routes = [
  { path: '', component: StocksComponent },
  { path: 'newstock', component: NewStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
