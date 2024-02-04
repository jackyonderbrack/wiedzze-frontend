import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MediaListComponent } from 'projects/admin/src/app/components/media-list/media-list.component';
import { UploadComponent } from 'projects/admin/src/app/components/upload/upload.component';

@Component({
    selector: 'app-media-page',
    templateUrl: './media-page.component.html',
    styleUrls: ['./media-page.component.scss'],
    standalone: true,
    imports: [MatCardModule, UploadComponent, CommonModule, MediaListComponent]
})
export class MediaPageComponent {}
