import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { MatSidenavModule } from '@angular/material/sidenav'

import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { HeaderComponent } from '../../components/header/header.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class DashboardPageComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  menuItems = [
    { title: 'Newsy', link: '/dashboard/news' },
    { title: 'Kategorie', link: '/dashboard/categories' },
    { title: 'Media', link: '/dashboard/media' },
    // { title: 'Szablony', link: '/dashboard/templates' },
    // { title: 'Wygląd', link: '/dashboard/theme' },
    // { title: 'Konto', link: '/dashboard/account' }
  ]

  handleLogout() {
    this.authenticationService.logout()
  }
}
