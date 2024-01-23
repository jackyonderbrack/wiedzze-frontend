import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NewsModel } from 'projects/admin/src/app/models/news.model';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';

@Component({
    selector: 'app-news-list',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatListModule],
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
    newsListArray: NewsModel[] = [];

    constructor(private newsService: NewsService) {}
    ngOnInit(): void {
        this.newsService;
    }
}
