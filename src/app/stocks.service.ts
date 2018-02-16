import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  public stockNames: string [] = new Array();

  constructor() { }

  addNewStock(name: string) {
    this.stockNames.push(name);
  }

}
