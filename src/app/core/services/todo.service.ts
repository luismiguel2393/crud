import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/index.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo [] =[
    {
    id:1,
    title:'Test Title',
    descripcion:'Test Descrpcion',
    status:'OPEN'
  }]

  constructor() { }

  getAllTodo(){
    return this.todos;
  }

}
