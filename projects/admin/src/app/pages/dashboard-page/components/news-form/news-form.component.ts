import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

import { CategoryService } from 'projects/admin/src/app/services/category/category.service';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatSelectModule,
        CommonModule
    ]
})
export class NewsFormComponent implements OnInit {
    addNewsForm: FormGroup;
    newsCategories: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private newsService: NewsService,
        private categoryService: CategoryService,
        private snackBar: MatSnackBar
    ) {
        this.addNewsForm = this.formBuilder.group({
            newsCategory: ['', Validators.required],
            newsTitle: ['', [Validators.required, Validators.minLength(3)]],
            newsDescription: [''],
            newsContent: ['', [Validators.required, Validators.minLength(20)]],
            newsImageUrl: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe((data) => {
            this.newsCategories = data;
        });
    }

    handleAddNews() {
        if (this.addNewsForm.valid) {
            this.newsService.createNews(this.addNewsForm.value).subscribe({
                next: (response) => {
                    this.snackBar.open('Dodano nowy post', 'Zamknij', {
                        duration: 1500
                    });
                    this.addNewsForm.reset();
                },
                error: (error) => {
                    this.snackBar.open('Nie udało się dodać newsa', 'Zamknij', {
                        duration: 1500
                    });
                    console.log('Wystąpił błąd', error);
                }
            });
        }
    }
    // handleEditNews() {}
}
