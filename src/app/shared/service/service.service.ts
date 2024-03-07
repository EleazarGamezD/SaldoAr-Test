import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';
import { ExchangeRates } from '../interface/currency.interface';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private entryUrl: string = environment.entryUrl;
  private baseUrl: string = environment.baseUrl;
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor(private stateService: StateService,
    private http: HttpClient,) { }


  /**
   * Retrieves the currency exchange rates.
   */
  getCurrency(): Observable<ExchangeRates[]> {
    return this.http.get<ExchangeRates[]>(this.entryUrl);
  }


  /**
   * A function that handles the login process.
   *
   * @param {User} loginData - the user data used for login
   * @return {Observable<boolean>} an observable that emits a boolean value
   */
  login(loginData: User) {
    console.log(loginData);
    const url = `${this.baseUrl}/bridge/login`;
    return this.http.post<User>(url, loginData).pipe(
      map((resp: any) => {
        /* localStorage.setItem('token', resp.token); */ //pense que recibiría un token JWT para poder almacenarlo y usarlo luego en las peticiones privadas
        localStorage.setItem('userName', resp.name);
        this.stateService.setIsLoggedIn(true);
        return true;
      }),
      catchError(error => {
        console.log(error);
        return of(false);
      })
    );
  }

  /**
   * Retrieves the systems from the server.
   *
   * @return {Observable<any>} the observable of the systems retrieved from the server
   */
  getSystems(): Observable<any> {
    const url = `${this.baseUrl}/bridge/systems`;
    return this.http.get<any>(url)
  }
  /**
   * Logout function clears the local storage.
   */
  logout() {
    localStorage.clear();
  }

}
