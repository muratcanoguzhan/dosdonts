import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import { Observable, interval } from 'rxjs';
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
    <button (click)="markForCheck()">MarkForCheck</button>
  `,
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  _changeDetectorRef = inject(ChangeDetectorRef);

  @Input() todos: Todo[] | undefined;

  console(): void {
    console.log('TodoListComponent rendered!');
  }

  markForCheck = () => this._changeDetectorRef.markForCheck();
}
