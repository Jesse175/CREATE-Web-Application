import { Component, Input } from '@angular/core';
import { Module } from 'src/models/module';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent {
  @Input() modules: Module[]= [];
}
