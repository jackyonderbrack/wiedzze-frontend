import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NewsModel } from 'projects/admin/src/app/models/news.model';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  newsListArray: NewsModel[] = [];
  selectedNews: any = null;
  displayedColumns: string[] = [
    'category',
    'title',
    'description',
    'content',
    'image',
    'options',
  ];

  constructor(
    private newsService: NewsService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe((data) => {
      this.newsListArray = data;
    });
  }

  handleDeleteNews(id: string) {
    const confirmation = window.confirm('Czy na pewno chcesz usunąć ten news?');
    if (confirmation) {
      this.newsService.deleteNews(id).subscribe({
        next: () => {
          this.snackBar.open('Kategoria usunięta', 'Zamknij', {
            duration: 3000,
          });
          this.loadNews();
        },
        error: () => {
          this.snackBar.open('Błąd podczas usuwania kategorii', 'Zamknij', {
            duration: 3000,
          });
        },
      });
    }
  }

  htmlSlice(
    content: HTMLElement | string,
    length: number
  ): HTMLElement | string {
    const strippedContent = content.toString().replace(/<[^>]*>/g, '');
    if (strippedContent.length > length) {
      return strippedContent.slice(0, length);
    }
    return strippedContent;
  }
}
