import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { HttpHeaders } from '@angular/common/http'
import { AccountService } from '../../services/account/account.service'

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(private authService: AuthenticationService, private accountService: AccountService) {}

  ngOnInit() {
    this.getCurrentUser()
  }

  getCurrentUser() {
    const token = this.authService.getToken() // Pobierz token bezpośrednio z authService
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      }
      this.accountService.getCurrentUser(httpOptions).subscribe({
        next: (user) => {
          console.log(user) // Tutaj obsłuż dane użytkownika
        },
        error: (error) => {
          console.error(error) // Obsługa błędów
        },
      })
    } else {
      console.log('Brak dostępnego tokena')
    }
  }
}
