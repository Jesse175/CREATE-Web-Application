import { Component, Input } from '@angular/core';
import { Role } from 'src/models/role.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  @Input() students: Role[]= [];
}
