import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CategoryService } from 'projects/admin/src/app/services/category/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule
    ]
})
export class CategoryListComponent implements OnInit {
    public categoryListArray: any = [];
    selectedCategory: any = null;

    constructor(
        private categoryService: CategoryService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.loadCategories();
    }

    loadCategories() {
        this.categoryService.getCategories().subscribe((data) => {
            this.categoryListArray = data;
        });
    }

    handleDeleteCategory(id: any) {
        const confirmation = window.confirm(
            'Czy na pewno chcesz usunąć tę kategorię?'
        );
        if (confirmation) {
            this.categoryService.deleteCategory(id).subscribe({
                next: () => {
                    this.snackBar.open('Kategoria usunięta', 'Zamknij', {
                        duration: 3000
                    });
                    this.loadCategories();
                },
                error: () => {
                    this.snackBar.open(
                        'Błąd podczas usuwania kategorii',
                        'Zamknij',
                        { duration: 3000 }
                    );
                }
            });
        }
    }

    handleUpdateCategory(category: any) {
        console.log('Aktualna kategoria do edycji: ', category);
        this.selectedCategory = { ...category };
    }

    submitUpdatedCategory() {
        if (this.selectedCategory) {
            this.categoryService
                .updateCategory(
                    this.selectedCategory,
                    this.selectedCategory._id
                )
                .subscribe({
                    next: () => {
                        this.snackBar.open(
                            'Kategoria zaktualizowana',
                            'Zamknij',
                            { duration: 3000 }
                        );
                        this.loadCategories();
                        this.selectedCategory = null;
                    },
                    error: () => {
                        this.snackBar.open(
                            'Błąd podczas aktualizacji kategorii',
                            'Zamknij',
                            { duration: 3000 }
                        );
                        this.selectedCategory = null;
                    }
                });
        }
    }

    cancelUpdatedCategory() {
        this.selectedCategory = null;
    }
}
