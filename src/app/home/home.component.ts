import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../shared/service/state.service';
import { ServiceService } from '../shared/service/service.service';
import { CurrencyInfo } from '../shared/interface/currency.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencies: { [key: string]: CurrencyInfo } = {};
  currencyArray: { key: string, value: CurrencyInfo }[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private service: ServiceService,
    private router: Router,
    private stateService: StateService
  ) { }

  /**
   * Initializes the component, setting the logged in status from local storage and subscribing to changes in the logged in status.
   *
   * @return {void}
   */
  ngOnInit(): void {
    this.isLoggedIn = this.stateService.getIsLoggedInFromLocalStorage();
    this.stateService.setIsLoggedIn(this.isLoggedIn);
    this.stateService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn === true) {
        this.navigateTo('/systems');
      }
    });

    this.homeEntry();
  }

  /**
   * A description of the entire function.
   *
   */
  homeEntry() {
    this.service.getCurrency().subscribe(
      (data: any) => {
        this.currencies = data;
        this.currencyArray = this.getCurrenciesArray();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Retrieves an array of key-value pairs representing the currencies.
   *
   * @return {Array<{ key: string, value: CurrencyInfo }>} the array of key-value pairs representing the currencies
   */
  getCurrenciesArray(): { key: string, value: CurrencyInfo }[] {
    return Object.entries(this.currencies).map(([key, value]) => ({ key, value }));
  }

  /**
   * Navigate to a specified route.
   *
   * @param {string} route - the route to navigate to
   * @return {void}
   */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  /**
   * Retrieves the card class based on the currency key.
   *
   * @param {string} currencyKey - the currency key to determine the card class
   * @return {string} the corresponding card class based on the currency key
   */
  getCardClass(currencyKey: string): string {

    switch (currencyKey) {
      case 'bitcoin':
        return 'card green';
      case 'usdt':
        return 'card red';
      case 'dai':
        return 'card blue';
      default:
        return 'card';
    }
  }

  /**
   * Redirects the user to the specified URL.
   *
   * @param {string} url - the URL to redirect to
   * @return {void}
   */
  redirectTo(url: string): void {
    window.open(url);
  }
  /**
   * Navigates to the login page.
   */
  goToLogin(): void {
    this.navigateTo('/login');
  }
}
