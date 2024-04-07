import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStandupComponent } from './daily-standup.component';

describe('DailyStandupComponent', () => {
  let component: DailyStandupComponent;
  let fixture: ComponentFixture<DailyStandupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyStandupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyStandupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
