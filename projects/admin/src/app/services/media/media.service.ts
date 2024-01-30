import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaModel } from '../../models/media.model';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    private baseUrl = 'http://localhost:8080/media';

    constructor(private httpClient: HttpClient) {}

    loadAllMedia(): Observable<MediaModel[]> {
        return this.httpClient.get<MediaModel[]>(`${this.baseUrl}/get`);
    }
}
