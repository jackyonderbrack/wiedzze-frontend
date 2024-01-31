import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModel } from '../../models/media.model';
import { MediaService } from '../../services/media/media.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatButtonModule, MatIconModule],
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
})
export class MediaListComponent implements OnInit {
  mediaList: MediaModel[] = [];

  constructor(
    private mediaService: MediaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadMediaList();
  }

  loadMediaList(): void {
    this.mediaService.loadAllMedia().subscribe({
      next: (data) => {
        this.mediaList = data;
        this.snackBar.open('Media załadowano pomyślnie', 'Zamknij', {
          duration: 3000,
        });
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open('Nie udało się pobrać galerii medów', 'Zamknij', {
          duration: 3000,
        });
      },
    });
  }

  handleDeleteFile(_id: string): void {
    const confirmation = window.confirm('Czy na pewno chcesz usunąć ten plik?');
    if (confirmation) {
      this.mediaService.deleteFile(_id).subscribe({
        next: (data) => {
          this.snackBar.open('usunięto plik', 'Zamknij', {
            duration: 3000,
          });
          this.loadMediaList();
        },
        error: () => {
          this.snackBar.open('Błąd podczas usuwania pliku', 'Zamknij', {
            duration: 3000,
          });
        },
      });
    }
  }
}
