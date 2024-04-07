import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStandupCardComponent } from './daily-standup-card.component';

describe('DailyStandupCardComponent', () => {
  let component: DailyStandupCardComponent;
  let fixture: ComponentFixture<DailyStandupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyStandupCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyStandupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
