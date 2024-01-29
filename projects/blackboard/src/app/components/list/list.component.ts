import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Post } from '../../models/post.model';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Input() posts!: Post[];

    ngOnInit(): void {}
}
