import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperUploadComponent } from './developer-upload.component';

describe('DeveloperUploadComponent', () => {
  let component: DeveloperUploadComponent;
  let fixture: ComponentFixture<DeveloperUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
