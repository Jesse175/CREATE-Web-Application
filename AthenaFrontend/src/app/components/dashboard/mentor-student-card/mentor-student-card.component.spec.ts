import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStudentCardComponent } from './mentor-student-card.component';

describe('MentorStudentCardComponent', () => {
  let component: MentorStudentCardComponent;
  let fixture: ComponentFixture<MentorStudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorStudentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
