import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancePageComponent } from './appearance-page.component';

describe('AppearancePageComponent', () => {
  let component: AppearancePageComponent;
  let fixture: ComponentFixture<AppearancePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppearancePageComponent]
    });
    fixture = TestBed.createComponent(AppearancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
