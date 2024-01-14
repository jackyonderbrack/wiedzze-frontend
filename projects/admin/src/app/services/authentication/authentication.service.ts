import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private apiUrl = 'http://localhost:8080/auth/login';
    private token: string | undefined;

    constructor(private httpClient: HttpClient) {}

    saveToken(token: string): void {
        localStorage.setItem('jwt_token', token);
        this.token = token;
    }

    getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('jwt_token') || '';
        }
        return this.token || '';
    }

    isTokenValid(): boolean {
        const token = this.getToken();
        if (token) {
            return true;
        }
        return false;
    }

    login(loginData: LoginModel): Observable<any> {
        return this.httpClient.post<any>(this.apiUrl, loginData).pipe(
            tap((response) => {
                this.saveToken(response.token);
            })
        );
    }
}
