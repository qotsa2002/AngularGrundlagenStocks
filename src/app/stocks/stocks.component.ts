import { Component, OnInit } from '@angular/core';
import { StocksService, StockQuota } from '../stocks.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: StockQuota[] = new Array();

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
    this.getCurrentStockQuotas();
    this.stocksService.refreshStocksEvent.subscribe(() => { this.getCurrentStockQuotas(); });
  }

getCurrentStockQuotas() {
  this.stocksService.getCurrentStockQuotas().subscribe((stocksQuota) => { this.stocks = stocksQuota; });
}

}
