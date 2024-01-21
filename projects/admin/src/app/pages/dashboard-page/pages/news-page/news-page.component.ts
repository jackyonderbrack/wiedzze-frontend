import { Component } from '@angular/core';
import { AddPostFormComponent } from '../../components/add-post-form/add-post-form.component';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss'],
    standalone: true,
    imports: [AddPostFormComponent]
})
export class NewsPageComponent {}
