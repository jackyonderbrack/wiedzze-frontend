import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from 'projects/admin/src/app/services/category/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatButtonModule]
})
export class CategoryListComponent implements OnInit {
    displayedColumns: string[] = ['categoryName', 'categoryOptions'];

    public categoryListArray = [];
    static categoryListArray: any;

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

    handleUpdateCategory(id: any) {}
}
