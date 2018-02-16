import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StocksService {

  public stockNames: string[] = ['dax'];

  constructor(private httpClient: HttpClient) { }

  addNewStock(name: string) {
    this.stockNames.push(name);
  }

  getCurrentStockQuotas() {
    return this.httpClient.get<StockQuota[]>('https://stockplaceholder.herokuapp.com/api/stocks/' + this.stockNames.join('/'));
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
