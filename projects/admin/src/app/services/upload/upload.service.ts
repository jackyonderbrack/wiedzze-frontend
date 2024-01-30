import {
    HttpClient,
    HttpEvent,
    HttpEventType,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    private baseUrl = 'http://localhost:8080/media';

    constructor(private httpClient: HttpClient) {}

    uploadFile(uploadedFile: File): Observable<number> {
        const formData = new FormData();
        formData.append('file', uploadedFile); // Dodaj plik do obiektu FormData

        // Utwórz żądanie HttpRequest z opcją reportProgress
        const req = new HttpRequest(
            'POST',
            `${this.baseUrl}/upload`,
            formData,
            {
                reportProgress: true
            }
        );

        // Wyślij żądanie i zmapuj postęp na wartość procentową
        return this.httpClient.request(req).pipe(
            map((event) => {
                switch (event.type) {
                    case HttpEventType.UploadProgress:
                        // Oblicz postęp jako procent
                        return event.total
                            ? Math.round((100 * event.loaded) / event.total)
                            : 0;
                    case HttpEventType.Response:
                        // Zwróć 100% gdy plik zostanie w pełni przesłany
                        return 100;
                    default:
                        // Domyślnie zwróć 0
                        return 0;
                }
            })
        );
    }
}
