import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourUploadComponent } from './your-upload.component';

describe('YourUploadComponent', () => {
  let component: YourUploadComponent;
  let fixture: ComponentFixture<YourUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
