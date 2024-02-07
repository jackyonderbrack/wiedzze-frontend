import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select'

import { CategoryService } from 'projects/admin/src/app/services/category/category.service'
import { NewsService } from 'projects/admin/src/app/services/news/news.service'
import { MediaService } from '../../services/media/media.service'
import { CommonModule } from '@angular/common'
import { CategoryModel } from 'projects/admin/src/app/models/category.model'
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor'
import { MediaModel } from '../../models/media.model'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { ImagePickerDialogComponent } from '../image-picker-dialog/image-picker-dialog.component'

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSelectModule,
    CommonModule,
    AngularEditorModule,
    MatDialogModule,
  ],
})
export class NewsFormComponent implements OnInit {
  addNewsForm: FormGroup
  newsCategories: CategoryModel[] = []
  mediaImages: MediaModel[] = []

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Konfiguruj swoją treść tutaj...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    rawPaste: true,
  }

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private mediaService: MediaService,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.addNewsForm = this.formBuilder.group({
      newsCategory: ['', Validators.required],
      newsTitle: ['', [Validators.required, Validators.minLength(3)]],
      newsDescription: [''],
      newsContent: ['', [Validators.required, Validators.minLength(20)]],
      newsImageUrl: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.newsCategories = data
    })
  }

  handleLoadMedia() {
    this.mediaService.loadAllMedia().subscribe((data) => {
      this.mediaImages = data
    })
  }

  openImagePicker(): void {
    // Otwieranie dialogu i przechowywanie referencji do otwartego dialogu.
    const dialogRef = this.dialog.open(ImagePickerDialogComponent, {
      width: '80%',
      data: this.mediaImages, // Upewnij się, że przekazujesz dane w oczekiwanym formacie.
    })

    // Wywołanie afterClosed() na referencji dialogu, a nie na MatDialog.
    dialogRef.afterClosed().subscribe((selectedImage) => {
      if (selectedImage) {
        // Poprawne użycie metody setValue na FormControl.
        this.addNewsForm.get('newsImageUrl')?.setValue(selectedImage.filePath)
        // Zakładając, że 'filePath' jest odpowiednim polem wybranego obrazu.
      }
    })
  }

  handleAddNews() {
    if (this.addNewsForm.valid) {
      this.newsService.createNews(this.addNewsForm.value).subscribe({
        next: (response) => {
          this.snackBar.open('Dodano nowy post', 'Zamknij', {
            duration: 1500,
          })
          this.addNewsForm.reset()
        },
        error: (error) => {
          this.snackBar.open('Nie udało się dodać newsa', 'Zamknij', {
            duration: 1500,
          })
          console.log('Wystąpił błąd', error)
        },
      })
    }
  }
}
