import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
  constructor() { 
    this.todos=[
      {

        title: "Todo title 1",
        desc : "Description 1"
      },
      {
       
        title: "Todo title 2",
        desc : "Description 2"
      },
      {
    
        title: "Todo title 3",
        desc : "Description 3"
      }
    ]
  }

  ngOnInit(): void {
  }
  deltodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  addtodo(todo:Todo){
    alert("sadds");
    console.log(todo)
    this.todos.push(todo);
  }
}
