import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationFormComponent } from './configuration-form.component';

describe('ConfigurationFormComponent', () => {
  let component: ConfigurationFormComponent;
  let fixture: ComponentFixture<ConfigurationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationFormComponent]
    });
    fixture = TestBed.createComponent(ConfigurationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
