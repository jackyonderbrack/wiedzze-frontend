import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UploadService } from '../../services/upload/upload.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-upload',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatSnackBarModule],
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
    selectedFile: File | null = null;
    uploadProgress: number | null = null;

    constructor(
        private uploadService: UploadService,
        private snackBar: MatSnackBar
    ) {}

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;

        if (input.files && input.files.length) {
            this.selectedFile = input.files[0];
        }
    }

    handleUpload(): void {
        if (this.selectedFile) {
            this.uploadService.uploadFile(this.selectedFile).subscribe({
                next: (progress) => {
                    this.uploadProgress = progress;
                    this.snackBar.open('Przesłano pomyślnie', 'Zamknij', {
                        duration: 1500
                    });
                },
                error: (error) => {
                    console.error('Błąd podczas przesyłania pliku', error);
                    this.snackBar.open(
                        'Błąd podczas przesyłania pliku',
                        'Zamknij',
                        { duration: 3000 }
                    );
                }
            });
        }
        this.snackBar.open('Wybierz obraz', 'Zamknij', { duration: 3000 });
    }
}
