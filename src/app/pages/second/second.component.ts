import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>second works!</p>
    <br />
    <button class="btn">Second Button</button>
  `,
  styleUrls: ['./second.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class SecondComponent {}
