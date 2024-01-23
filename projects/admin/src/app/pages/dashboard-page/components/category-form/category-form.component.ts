import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CategoryService } from 'projects/admin/src/app/services/category/category.service';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss'],
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatSnackBarModule
    ]
})
export class CategoryFormComponent {
    @Output() categoryAdded = new EventEmitter<void>();

    categoryForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private snackBar: MatSnackBar
    ) {
        this.categoryForm = this.fb.group({
            categoryName: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    handleAddCategory() {
        if (this.categoryForm.valid) {
            this.categoryService
                .createCategory(this.categoryForm.value)
                .subscribe({
                    next: (response) => {
                        this.snackBar.open('Dodano nową kategorię', 'Zamknij', {
                            duration: 1500
                        });
                        this.categoryAdded.emit(); // Emitowanie eventu
                        this.categoryForm.reset(); // Resetowanie formularza
                    },
                    error: (error) => {
                        this.snackBar.open(
                            'Nie udało się dodać nowej kateogii',
                            'Zamknij',
                            {
                                duration: 1500
                            }
                        );
                        console.log('Wystąpił błąd', error);
                    }
                });
        }
    }
}
