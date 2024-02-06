import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccountComponent } from '../../../components/account/account.component'

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [CommonModule, AccountComponent],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent {}
