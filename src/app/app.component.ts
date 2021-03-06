import { Component, VERSION } from '@angular/core';
import * as cc from 'currency-codes';
interface CurrencyCode {
  code: string;
  countries: string[];
  currency: string;
  digits: number;
  number: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data = cc.data;
  constructor() {
    console.log(cc.codes());
    console.log(cc.code('EUR'));
    console.log(
      (cc.data as CurrencyCode[])
        .filter((x) => x.code === 'PLN')
        .map((x) => x.currency)
    );
    console.log(cc.data);
  }
}
