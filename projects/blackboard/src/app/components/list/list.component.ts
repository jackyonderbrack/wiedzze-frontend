import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  newsData: any = [];
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNewsData();
  }

  loadNewsData() {
    this.newsService.getAllNews().subscribe((data) => {
      this.newsData = data;
    });
  }
}
