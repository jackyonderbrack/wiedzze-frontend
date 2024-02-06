import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private authenticationService: AuthenticationService) {}

  menuItems = [
    { title: 'Newsy', link: '/dashboard/news' },
    { title: 'Kategorie', link: '/dashboard/categories' },
    { title: 'Media', link: '/dashboard/media' },
    { title: 'Motyw', link: '/dashboard/themes' },
    { title: 'Szablony', link: '/dashboard/templates' },
    { title: 'Wygląd', link: '/dashboard/appearance' },
    { title: 'Konta', link: '/dashboard/account' },
    { title: 'Ustawienia', link: '/dashboard/settings' },
  ]

  handleLogout() {
    this.authenticationService.logout()
  }
}
