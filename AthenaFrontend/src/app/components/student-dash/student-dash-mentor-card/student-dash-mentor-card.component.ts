import { Component, Input } from '@angular/core';
import { Mentor } from 'src/models/mentor.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-student-dash-mentor-card',
  templateUrl: './student-dash-mentor-card.component.html',
  styleUrls: ['./student-dash-mentor-card.component.css']
})
export class StudentDashMentorCardComponent {
  @Input() mentors: Mentor[] = [];
  @Input() role: any;

  constructor(private authService: AuthService) { }
}
