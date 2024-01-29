import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../components/section/section.component';
import { ListComponent } from '../../components/list/list.component';
import { TitleComponent } from '../../components/title/title.component';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        SectionComponent,
        ListComponent,
        TitleComponent,
        PostsComponent
    ],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
