import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePickerDialogComponent } from './image-picker-dialog.component';

describe('ImagePickerDialogComponent', () => {
  let component: ImagePickerDialogComponent;
  let fixture: ComponentFixture<ImagePickerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImagePickerDialogComponent]
    });
    fixture = TestBed.createComponent(ImagePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
