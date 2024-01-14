import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../../models/register.model';

@Injectable({
    providedIn: 'root'
})
export class FirstConfigurationService {
    private apiUrl = 'http://localhost:8080/start/first-configuration';

    constructor(private http: HttpClient) {}

    addAdmin(registerData: RegisterModel) {
        return this.http.post(this.apiUrl, registerData);
    }
}
