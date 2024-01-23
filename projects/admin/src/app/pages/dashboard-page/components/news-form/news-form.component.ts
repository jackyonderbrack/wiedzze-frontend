import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';
import { MatExpansionModule } from '@angular/material/expansion';

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
        MatExpansionModule
    ]
})
export class NewsFormComponent {
    addNewsForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private newsService: NewsService
    ) {
        this.addNewsForm = this.formBuilder.group({
            newsTitle: ['', [Validators.required, Validators.minLength(3)]],
            newsDescription: [''],
            newsContent: ['', Validators.required],
            newsImageUrl: ['', Validators.required]
        });
    }
    handleAddNews() {}
    hansleEditNews() {}
}
