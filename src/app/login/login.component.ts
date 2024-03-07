import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service/service.service';
import { StateService } from '../shared/service/state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  isLoading: boolean = false;
  constructor(
    private service: ServiceService,
    private stateService: StateService,
    private router: Router,
    private formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }


  /**
   * toggleShowPassword - Toggles the value of the showPassword variable.
   */
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  /**
   * The onSubmit function handles the submission of the form data, processes the login and logout services, and displays notifications to the user based on the success or failure of the login process.
   */
  onSubmit() {
    this.service.logout()
    this.isLoading = true
    const userData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    this.service.login(userData).subscribe(
      success => {
        if (success) {
          const userEmail = localStorage.getItem('userName');
          this.stateService.setIsLoggedIn(true);
          Swal.fire({
            icon: 'success',
            title: 'Notificación',
            text: `Bienvenido ${userEmail}`,
          });
          this.navigateTo('/systems');//TODO cambiar luego esta ruta !
          this.loginForm.reset();
        } else {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Usuario y/o contraseña invalida.`,

          });
        }
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${error}`,
        });

      }
    );
  }
  /**
   * A function to navigate back to the home route.
   */
  goBack() {
    this.router.navigate(['/home']);
  }
  /**
   * Navigates to the specified route.
   *
   * @param {string} route - The route to navigate to
   * @return {void}
   */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
