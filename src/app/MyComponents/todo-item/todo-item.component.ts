import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() TodoDelete: EventEmitter<Todo> = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }
  del(todo:Todo){
   this.TodoDelete.emit(todo);
  }
}
