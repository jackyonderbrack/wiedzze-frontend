import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule]

})
export class DashboardPageComponent {

}
