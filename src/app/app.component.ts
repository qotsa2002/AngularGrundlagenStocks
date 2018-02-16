import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private stocksService: StocksService) { }

  goToNewStock() {
    this.router.navigate(['newstock']);
  }

  refreshStocks() {
    this.stocksService.refreshStocks();
  }
}
