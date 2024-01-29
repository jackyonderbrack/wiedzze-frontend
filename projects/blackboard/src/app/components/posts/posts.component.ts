import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'projects/admin/src/app/services/news/news.service';
import { ListComponent } from '../list/list.component';
import { Post } from '../../models/post.model';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    standalone: true,
    imports: [ListComponent, CardComponent]
})
export class PostsComponent implements OnInit {
    @Input() postsCategory!: string;
    posts: Post[] = [];

    constructor(private postsService: NewsService) {}

    ngOnInit(): void {
        this.loadPostsData();
    }

    loadPostsData() {
        this.postsService.getAllNews().subscribe((data: Post[]) => {
            this.posts = data.filter(
                (post) => post.newsCategory.categoryName === this.postsCategory
            );
        });
    }
}
