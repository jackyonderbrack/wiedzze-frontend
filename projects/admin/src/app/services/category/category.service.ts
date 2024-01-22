import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private baseUrl = 'http://localhost:8080/categories';

    constructor(private httpClient: HttpClient) {}

    getCategories(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/get`);
    }

    createCategory(newCategoryData: any): Observable<any> {
        return this.httpClient.post<any>(
            `${this.baseUrl}/create`,
            newCategoryData
        );
    }

    deleteCategory(id: any): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
    }
}
