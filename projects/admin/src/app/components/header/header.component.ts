import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { AccountComponent } from '../account/account.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, AccountComponent],
})
export class HeaderComponent {}
