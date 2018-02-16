import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

  newStockName = '';

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
  }

  addNewStock() {
    if (this.newStockName === '') {
      return;
    }

    this.stocksService.addNewStock(this.newStockName);

    this.newStockName = '';
  }

}
