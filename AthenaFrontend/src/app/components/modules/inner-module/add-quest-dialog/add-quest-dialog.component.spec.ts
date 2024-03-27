import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { AddQuestDialogComponent } from './add-quest-dialog.component';

describe('AddQuestDialogComponent', () => {
  let component: AddQuestDialogComponent;
  let fixture: ComponentFixture<AddQuestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
