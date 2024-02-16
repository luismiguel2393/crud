import { Component, Input } from '@angular/core';
import { ITodo } from '../../../core/models/index.model';

export type ITodoType = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE';
export const ITodoStatus = ['OPEN','PROGRESS','TESTING','DONE'];

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [],
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.css'
})
export class TodosCardComponent {
  @Input() type: ITodoType = 'OPEN';
  @Input() todo!: ITodo;
 
}
