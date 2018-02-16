import { Injectable, Query, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StocksService {

  stockNames: string[] = ['dax'];
  refreshStocksEvent = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  addNewStock(name: string) {
    this.stockNames.push(name);
  }

  getCurrentStockQuotas() {
    return this.httpClient.get<StockQuota[]>('https://stockplaceholder.herokuapp.com/api/stocks/' + this.stockNames.join('/'));
  }

  refreshStocks() {
    this.refreshStocksEvent.emit();
  }

}

export interface StockQuota {
  symbol: string;
  name: string;
  change: string;
  currency: string;
  lastTradeDate: string;
  lastTradePriceOnly: string;
  changeinPercent: string;
  lastTradeTime: string;
}
