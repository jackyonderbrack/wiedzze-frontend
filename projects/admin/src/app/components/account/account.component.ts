import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { HttpHeaders } from '@angular/common/http'
import { AccountService } from '../../services/account/account.service'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  currentUserData: any = []

  constructor(private authService: AuthenticationService, private accountService: AccountService) {}

  ngOnInit() {
    this.getCurrentUser()
  }

  getCurrentUser() {
    const token = this.authService.getToken()
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      }
      this.accountService.getCurrentUser(httpOptions).subscribe({
        next: (data) => {
          this.currentUserData = data
        },
        error: (error) => {
          console.error(error)
        },
      })
    } else {
      console.log('Brak dostępnego tokena')
    }
  }
}
