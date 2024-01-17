import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss'],
    standalone: true,
    imports: [CommonModule, MatSidenavModule, NavigationComponent]
})
export class DashboardPageComponent {}
