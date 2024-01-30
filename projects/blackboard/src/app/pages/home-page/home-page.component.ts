import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../components/section/section.component';
import { ListComponent } from '../../components/list/list.component';
import { TitleComponent } from '../../components/title/title.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { Post } from '../../models/post.model';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';

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
export class HomePageComponent implements OnInit {
    groupedPosts: Map<string, Post[]> = new Map();

    constructor(private postsService: NewsService) {}

    ngOnInit(): void {
        this.postsService.getAllNews().subscribe((posts) => {
            this.groupPostsByCategory(posts);
        });
    }

    groupPostsByCategory(posts: Post[]) {
        posts.forEach((post) => {
            const categoryName = post.newsCategory.categoryName;
            if (!this.groupedPosts.has(categoryName)) {
                this.groupedPosts.set(categoryName, []);
            }
            this.groupedPosts.get(categoryName)?.push(post);
        });
    }
}
