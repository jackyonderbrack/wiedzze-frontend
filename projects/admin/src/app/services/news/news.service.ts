import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from '../../models/news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private baseUrl = 'http://localhost:8080/categories';

    constructor(private httpClient: HttpClient) {}

    getAllNews(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/get`);
    }

    getSignleNews(id: string): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/get/${id}`);
    }

    createNews(newNewsData: NewsModel): Observable<any> {
        return this.httpClient.post<NewsModel>(
            `${this.baseUrl}/create`,
            newNewsData
        );
    }

    updateNews(updateNewsData: NewsModel, id: string): Observable<any> {
        return this.httpClient.put<NewsModel>(
            `${this.baseUrl}/update/${id}`,
            updateNewsData
        );
    }

    deleteNews(id: string): Observable<any> {
        return this.httpClient.delete<NewsModel>(
            `${this.baseUrl}/delete/${id}`
        );
    }
}
