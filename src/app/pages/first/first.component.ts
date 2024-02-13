import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>first works!</p>
    <br />
    <button class="btn">First Button</button>
  `,
  styleUrls: ['./first.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class FirstComponent {}
