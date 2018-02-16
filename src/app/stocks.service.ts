import { Injectable, Query, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StocksService {

  stockNames: string[] = this.getStockNames();
  refreshStocksEvent = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  addNewStock(name: string) {
    this.stockNames = this.getStockNames();
    this.stockNames.push(name);
    this.saveStockNames();
  }

  getCurrentStockQuotas() {
    return this.httpClient.get<StockQuota[]>('https://stockplaceholder.herokuapp.com/api/stocks/' + this.stockNames.join('/'));
  }

  refreshStocks() {
    this.refreshStocksEvent.emit();
  }

  private getStockNames() {

    let eintraegeArray;
    const eintraegeText = localStorage.getItem('stockNames');
    if (!eintraegeText) {
      const leererEintraegeArray = [];
      localStorage.setItem('stockNames', JSON.stringify(leererEintraegeArray));
    } else {
      eintraegeArray = JSON.parse(eintraegeText);
    }
    return eintraegeArray as string[];
  }

  private saveStockNames() {
    const eintraegeText = JSON.stringify(this.stockNames);
    localStorage.setItem('stockNames', eintraegeText);
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
