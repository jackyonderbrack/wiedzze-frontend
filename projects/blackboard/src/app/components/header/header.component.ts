import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, NavComponent, LogoComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
