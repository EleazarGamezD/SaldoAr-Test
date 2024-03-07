import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/service/theme.service';
import { StateService } from '../shared/service/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName = 'Invitado'
  constructor(
    private stateService: StateService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public themeService: ThemeService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.stateService.getIsLoggedInFromLocalStorage();
    this.stateService.setIsLoggedIn(this.isLoggedIn);
    this.stateService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      this.checkUser()
    });
    this.cdr.detectChanges();
  }

  /**
   * Check if the user is logged in and set the user name accordingly.
   *
   */
  checkUser() {
    if (this.isLoggedIn) {
      this.userName = localStorage.getItem('userName')!;
    } else {
      this.userName = 'Invitado'
    }
  };
  /**
   * Detects changes in the component and its children.
   *
   */


  /**
   * Toggle the theme.
   *
   */
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  /**
   * A function to handle the login process.
   */
  login() {
    this.router.navigate(['/login']);
  }
  /**
   * Logout function that logs out the user, sets isLoggedIn to false, and navigates to the home page.
   *
   * @param None
   * @return None
   */
  logout() {
    this.stateService.logout();
    this.stateService.setIsLoggedIn(false);
    this.ngOnInit()
    this.checkUser()
    this.router.navigate(['/']);
  }



}

