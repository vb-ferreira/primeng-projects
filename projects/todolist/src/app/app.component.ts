import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todo } from './interfaces/todo';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CardModule, TableModule, CheckboxModule, ButtonModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('todoTask') todoTask: any;

  todos: Todo[] = [];
  task = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appService.getTodoList().subscribe(
      response => {
        this.todos = response; 
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.appService.updateTodo({...todo, completed: e.checked}).subscribe(
      response => console.log(response)
    )
  }

  deleteTodo(e: unknown, id: Todo['id']) {
    this.appService.deleteTodo(id).subscribe(
      response => this.getList()
    )
  }

  addTodo() {
    this.appService.addTodo({task: this.task, completed: false}).subscribe(
      response => {
        this.todoTask.reset();
        this.getList();
      }
    )
  }
}
