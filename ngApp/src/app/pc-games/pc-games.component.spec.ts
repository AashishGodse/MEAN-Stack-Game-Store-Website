import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcGamesComponent } from './pc-games.component';

describe('PcGamesComponent', () => {
  let component: PcGamesComponent;
  let fixture: ComponentFixture<PcGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
