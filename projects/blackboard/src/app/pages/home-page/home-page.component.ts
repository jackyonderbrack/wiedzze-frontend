import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../components/section/section.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, SectionComponent, ListComponent],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
