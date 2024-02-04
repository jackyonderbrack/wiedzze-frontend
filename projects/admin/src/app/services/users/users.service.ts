import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:8080/users/current'
  constructor(private httpClient: HttpClient) {}

  getCurrentUser(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`)
  }
}
