import { Component, Input } from '@angular/core';
import { Role } from 'src/models/role.model';

@Component({
  selector: 'app-mentor-student-card',
  templateUrl: './mentor-student-card.component.html',
  styleUrls: ['./mentor-student-card.component.css']
})
export class MentorStudentCardComponent {
  @Input() students: Role[] = [];
}
