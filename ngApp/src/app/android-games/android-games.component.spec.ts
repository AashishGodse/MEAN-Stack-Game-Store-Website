import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidGamesComponent } from './android-games.component';

describe('AndroidGamesComponent', () => {
  let component: AndroidGamesComponent;
  let fixture: ComponentFixture<AndroidGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
