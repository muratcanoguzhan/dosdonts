import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.name }}
      </li>
    </ul>
    {{ console() }}
  `,
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: Todo[] | undefined;

  console(): void {
    console.log('TodoListComponent rendered!');
  }
}
