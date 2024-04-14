import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashMentorCardComponent } from './student-dash-mentor-card.component';

describe('StudentDashMentorCardComponent', () => {
  let component: StudentDashMentorCardComponent;
  let fixture: ComponentFixture<StudentDashMentorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashMentorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashMentorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
