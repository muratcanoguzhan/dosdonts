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
    this.todos[0].name = `${this.no++}. First item changed!`;
  }
}
