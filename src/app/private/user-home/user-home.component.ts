import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyInfo } from 'src/app/shared/interface/currency.interface';
import { ServiceService } from 'src/app/shared/service/service.service';
import { StateService } from 'src/app/shared/service/state.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements AfterViewInit {

  /*  usamos @ViewChild para acceder a los templates de las tarjetas */
  @ViewChild('USD') usdTemplate!: TemplateRef<any>;
  @ViewChild('ARS') arsTemplate!: TemplateRef<any>;
  @ViewChild('EUR') eurTemplate!: TemplateRef<any>;
  @ViewChild('BTC') btcTemplate!: TemplateRef<any>;
  @ViewChild('ETH') ethTemplate!: TemplateRef<any>;
  @ViewChild('LTC') ltcTemplate!: TemplateRef<any>;
  @ViewChild('XRP') xrpTemplate!: TemplateRef<any>;
  /* variable n */
  isLoggedIn: boolean = false;

  numCardsToShow: number = 3;
  currencies: { [key: string]: CurrencyInfo } = {};
  currencyArray: { key: string, value: CurrencyInfo }[] = [];

  /**
   * Constructor for initializing the ServiceService, Router, and StateService.
   *
   * @param {ServiceService} service - the service for handling service-related functionality
   * @param {Router} router - the router for navigation and URL manipulation
   * @param {StateService} stateService - the service for managing application state
   */
  constructor(

    private service: ServiceService,
    private router: Router,
    private stateService: StateService,
    private cdr: ChangeDetectorRef
  ) { }
  /**
   * Lifecycle hook that is called after Angular has fully initialized a component's view.
   *
   * @return {void} No return value
   */
  ngAfterViewInit(): void {
    this.stateService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn === false) {
        this.navigateTo('/');
      }
    });
    this.homeEntry();
    /* to detect changes */
    this.cdr.detectChanges();
    /*  this.getSystems(); */
  }


  /*   getSystems(): void {
      this.service.getSystems().subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  /* hardcoded balance data */
  balance = [

    {
      "key": "USD",
      "value": "500,00",
      "name": "Dolar estadounidense"
    },
    {
      "key": "ARS",
      "value": "3000000,00",
      "name": "Peso argentino"
    },
    {
      "key": "EUR",
      "value": "100,00",
      "name": "Euro"
    },
    {
      "key": "BTC",
      "value": "0,00",
      "name": "Bitcoin"
    },
    {
      "key": "ETH",
      "value": "0,0002341",
      "name": "Ethereum"
    },
    {
      "key": "LTC",
      "value": "0,0083472",
      "name": "Litecoin"
    },
    {
      "key": "XRP",
      "value": "0,0012334",
      "name": "Ripple"
    }
  ]


  /**
   * A function to get the template based on the given key.
   *
   * @param {string} key - the key to determine which template to return
   * @return {TemplateRef<any>} the template reference based on the key
   */
  getTemplate(key: string): TemplateRef<any> {
    switch (key) {
      case 'USD': return this.usdTemplate;
      case 'ARS': return this.arsTemplate;
      case 'EUR': return this.eurTemplate;
      case 'BTC': return this.btcTemplate;
      case 'ETH': return this.ethTemplate;
      case 'LTC': return this.ltcTemplate;
      case 'XRP': return this.xrpTemplate;
      default: return this.usdTemplate
    }
  }

  /**
   * Method to show more cards by increasing the number of cards to display.
   */
  showMoreCards() {
    this.numCardsToShow += 3;

  }
  /**
   * A function to show fewer cards.
   *
   */
  showLessCards() {
    this.numCardsToShow = Math.max(this.numCardsToShow - 3, 3);

  }
  /**
   * A function that makes a request to the service to get currency data and assigns the result to the currencies and currencyArray properties.
   *
   */
  homeEntry() {
    this.service.getCurrency().subscribe(
      (data: any) => {
        this.currencies = data;
        this.currencyArray = this.getCurrenciesArray();
        /* generates a random number between -20 and 100 */
        this.currencyArray.forEach(currencyKey => {
          const randomNumber = this.gotRandomNumber();
          if (randomNumber !== undefined) {
            currencyKey.value.randomNumber = randomNumber;
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /**
   * Retrieves an array of key-value pairs representing the currencies.
   *
   * @return {Array} Array of key-value pairs representing the currencies
   */
  getCurrenciesArray(): { key: string, value: CurrencyInfo }[] {
    return Object.entries(this.currencies).map(([key, value]) => ({ key, value }));
  }

  /**
   * Generate a random number between -20 and 100 (inclusive).
   *
   * @return {number} the random number generated
   */
  gotRandomNumber() {
    return Math.floor(Math.random() * (100 - (-20) + 1)) + -20;
  }


}
