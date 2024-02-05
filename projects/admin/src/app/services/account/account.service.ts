import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = 'http://localhost:8080/users'

  getCurrentUser(httpOptions: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/current`, httpOptions)
  }
}
