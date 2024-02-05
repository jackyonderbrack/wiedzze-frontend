import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginModel } from '../../models/login.model'
import { Observable, filter, tap } from 'rxjs'
import { NavigationEnd, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/auth/login'
  private tokenKey = 'jwt_token'

  constructor(private httpClient: HttpClient, private router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  isTokenValid(): boolean {
    const token = this.getToken()
    return !!token
  }

  login(loginData: LoginModel): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, loginData).pipe(
      tap((response) => {
        this.saveToken(response.token)
      })
    )
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey)
    this.router.navigate(['/login'])
  }
}
