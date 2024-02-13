import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-leaky',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>not-leaky works!</p>`,
  styleUrls: ['./not-leaky.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotLeakyComponent { }
