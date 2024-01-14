import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirstConfigurationService } from '../../services/first-configuration/first-configuration.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule]
})
export class ConfigurationFormComponent {
    configurationForm: FormGroup;

    constructor(private fb: FormBuilder, private configurationService: FirstConfigurationService, private snackBar: MatSnackBar, private router: Router) {
        this.configurationForm = this.fb.group({
            userName: ['', [Validators.required, Validators.minLength(3)]],
            userEmail: ['', [Validators.required, Validators.email]],
            userPassword: ['', Validators.required]
        });
    }
    handleRegister() {
        if (this.configurationForm.valid) {
            this.configurationService.addAdmin(this.configurationForm.value).subscribe({
                next: (response) => {
                    this.snackBar.open('Nowy administrator został pomyślnie dodany.', 'Zamknij', {
                        duration: 3000
                    });
                    this.snackBar._openedSnackBarRef?.afterDismissed().subscribe(() => {
                        this.router.navigate(['/login']);
                    });
                    console.log('Nowy użytkownik dodany', response);
                },
                error: (error) => {
                    this.snackBar.open('Nie udało się dodać nowego użytkownika.', 'Zamknij', {
                        duration: 6000
                    });
                    console.log('Wystąpił błąd', error);
                }
            });
        }
    }
}
