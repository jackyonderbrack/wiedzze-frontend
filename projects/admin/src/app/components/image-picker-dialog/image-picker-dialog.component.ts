import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { MediaModel } from '../../models/media.model'
import { MediaListComponent } from '../media-list/media-list.component'

@Component({
  selector: 'app-image-picker-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-picker-dialog.component.html',
  styleUrls: ['./image-picker-dialog.component.scss'],
})
export class ImagePickerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ImagePickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MediaModel[]
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  onSelectImage(image: MediaModel): void {
    this.dialogRef.close(image)
  }
}
