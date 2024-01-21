import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirstConfigurationService } from 'projects/admin/src/app/services/first-configuration/first-configuration.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule]
})
export class AddPostFormComponent {
  addNewsForm: FormGroup;
  constructor(private fb: FormBuilder, private configurationService: FirstConfigurationService, private snackBar: MatSnackBar, private router: Router) {
    this.addNewsForm = this.fb.group({
        newsTitle: ['', [Validators.required, Validators.minLength(3)]],
        newsDescription: ['', [Validators.required, Validators.email]],
        userPassword: ['', Validators.required]
    });
}

handleAddNews() {

}
}
