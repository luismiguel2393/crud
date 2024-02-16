import { ITodoStatus } from './../../shared/components/todos-card/todos-card.component';
import { SlidePanelComponent } from './../../shared/ui/slide-panel/slide-panel.component';
import { ITodo } from './../../core/models/index.model';
import { Component, OnInit} from '@angular/core';
import { TodosCardComponent } from '../../shared/components/todos-card/todos-card.component';
import { TodoService } from '../../core/services/todo.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [TodosCardComponent,SlidePanelComponent,ReactiveFormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent  implements OnInit {
  todosForm!: FormGroup;
  todos: ITodo[] = [];
  isSlidePanelOpen = false; // Corregido: asignación de valor inicial
  todoStatus = ITodoStatus; // Agrega esta línea con tus estados de todo
  constructor (private todoService: TodoService, private fb:FormBuilder ) {
    this.todosForm = this.fb.group ({
      title:new FormControl ('', [Validators.required]),
      description:new FormControl ('', [Validators.required]),
      status:new FormControl ('OPEN', [Validators.required]),
    });
  }
  
  ngOnInit():void {
    this.getAllTodos();
  }
  getAllTodos(){
    this.todos = this.todoService.getAllTodo();

  }
  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
  }

  onSubmit(){
    if(this.todosForm.valid){ 
    }else{
      this.todosForm.markAllAsTouched();
    }
  }
}