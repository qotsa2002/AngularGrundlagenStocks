import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StocksService {

  public stockNames: string[] = new Array();

  constructor(private httpClient: HttpClient) { }

  addNewStock(name: string) {
    this.stockNames.push(name);
  }

  getCurrentStockQuotas() {
    return this.httpClient.get<StockRootObject>('https://stockplaceholder.herokuapp.com/api/stocks');
  }
}

export interface Quote {
  symbol: string;
  name: string;
  change: string;
  currency: string;
  lastTradeDate: string;
  lastTradePriceOnly: string;
  changeinPercent: string;
  lastTradeTime: string;
}

export interface Result {
  quote: Quote[];
}

export interface Query {
  count: number;
  created: string;
  lang: string;
  results: Result;
}

export interface StockRootObject {
  query: Query;
}
