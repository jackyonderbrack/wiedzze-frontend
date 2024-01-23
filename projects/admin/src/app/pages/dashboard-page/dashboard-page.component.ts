import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
        MatIconModule
    ]
})
export class DashboardPageComponent {
    menuItems = [
        { title: 'Newsy', link: '/dashboard/news' },
        { title: 'Kategorie', link: '/dashboard/categories' },
        { title: 'Media', link: '/dashboard/media' },
        { title: 'Szablony', link: '/dashboard/templates' },
        { title: 'Wygląd', link: '/dashboard/theme' },
        { title: 'Konto', link: '/dashboard/account' }
    ];
}
