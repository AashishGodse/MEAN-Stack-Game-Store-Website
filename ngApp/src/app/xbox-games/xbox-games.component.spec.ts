import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxGamesComponent } from './xbox-games.component';

describe('XboxGamesComponent', () => {
  let component: XboxGamesComponent;
  let fixture: ComponentFixture<XboxGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
