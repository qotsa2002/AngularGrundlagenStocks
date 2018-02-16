import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

  newStockName = '';

  constructor(private stocksService: StocksService, private router: Router) { }

  ngOnInit() {
  }

  addNewStock() {
    if (this.newStockName === '') {
      return;
    }

    this.stocksService.addNewStock(this.newStockName);

    this.router.navigate(['']);
  }

}
