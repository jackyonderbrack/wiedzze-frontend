import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule, MatInputModule]
})
export class LoginFormComponent {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private snackBar: MatSnackBar, private router: Router) {
        this.loginForm = this.formBuilder.group({
            userLogin: ['', Validators.required],
            userPassword: ['', Validators.required]
        });
    }

    handleLogin() {
        if (this.loginForm.valid) {
            const loginData = this.loginForm.value;

            this.authenticationService.login(loginData).subscribe({
                next: (response: any) => {
                    this.authenticationService.saveToken(response.token);
                    this.snackBar.open('Zalogowano pomyślnie', 'Zamknij', { duration: 3000 });
                    this.router.navigate(['/admin']);
                },
                error: (error: any) => {
                    this.snackBar.open('Błąd logowania: ' + error.error.message, 'Zamknij', { duration: 3000 });
                }
            });
        } else {
            // Źle wypełniony formularz
            this.snackBar.open('Proszę wypełnić wszystkie wymagane pola', 'Zamknij', { duration: 3000 });
        }
    }
}
