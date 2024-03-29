import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>first works!</p>
    <br />
    <button class="btn">First Button</button>
    {{ console() }}
  `,
  styleUrls: ['./first.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  console(): void {
    console.log('FirstComponent rendered!');
  }
}
