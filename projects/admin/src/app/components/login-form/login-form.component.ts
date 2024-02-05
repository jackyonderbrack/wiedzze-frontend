import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { AccountComponent } from '../account/account.component'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule, MatInputModule],
  providers: [AccountComponent],
})
export class LoginFormComponent {
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private account: AccountComponent
  ) {
    this.loginForm = this.formBuilder.group({
      userLogin: ['', Validators.required],
      userPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.handleLogin()
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value

      this.authenticationService.login(loginData).subscribe({
        next: (response: any) => {
          // Zapisz token
          this.authenticationService.saveToken(response.token)
          // Wyświetl komunikat o pomyślnym zalogowaniu
          this.snackBar
            .open('Zalogowano pomyślnie', 'Zamknij', { duration: 1500 })
            .afterDismissed()
            .subscribe(() => {
              this.account.getCurrentUser()
              // Przekieruj na stronę główną/dashboard po zamknięciu snackBar
              this.router.navigate(['/dashboard'])
            })
        },
        error: (error: any) => {
          // Wyświetl komunikat o błędzie logowania
          this.snackBar.open('Serwer: ' + error.error.message, 'Zamknij', { duration: 3000 })
        },
      })
    } else {
      // Źle wypełniony formularz
      this.snackBar.open('Proszę wypełnić wszystkie wymagane pola', 'Zamknij', { duration: 3000 })
    }
  }
}
