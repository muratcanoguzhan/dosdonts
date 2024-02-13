import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { FirstComponent } from './pages/first/first.component';
import { TodoListComponent } from './pages/pages/todo-list/todo-list.component';
import { SecondComponent } from './pages/second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TodoListComponent,
    FirstComponent,
    SecondComponent,
  ],
})
export class AppComponent {
  title = 'dosdonts';
  todos: Todo[] = [
    { id: '1', name: 'Fal' },
    { id: '1', name: 'Semisel' },
    { id: '1', name: 'Buy Stroller' },
  ];

  no = 0;
  mutate() {
    // mutate doesn't work becasue we don't change this.todos reference
    // but we run changeDetection for TodoList by calling markForCheck() inside that component  
    this.todos[0].name = `${this.no++}. First item changed!`;
  }

  push() {
    // active TodoListComponent for change detection
    // we need to set a new instance to this.todos
    const newTodos = [...this.todos];
    newTodos.push({ id: '1', name: 'Pushed newly!' });
    this.todos = newTodos;
  }
}
