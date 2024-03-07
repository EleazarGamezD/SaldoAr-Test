
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor() { }
  /**
   * Retrieves the current login status.
   *
   * @return {boolean} the current login status
   */
  getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  /**
   * Set the logged in status and update the local storage.
   *
   * @param {boolean} isLoggedIn - the new logged in status
   * @return {void}
   */
  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }

  /**
   * Get the user's login status from local storage.
   *
   * @return {boolean} the user's login status
   */
  getIsLoggedInFromLocalStorage(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  }


  /**
   * Logs the user out by clearing the local storage.
   */
  logout() {
    localStorage.clear();
  }


}
