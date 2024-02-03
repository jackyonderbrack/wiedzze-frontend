import { Component } from '@angular/core';
import { NewsFormComponent } from '../../../../components/news-form/news-form.component';
import { NewsListComponent } from '../../../../components/news-list/news-list.component';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  standalone: true,
  imports: [NewsFormComponent, NewsListComponent],
})
export class NewsPageComponent {}
