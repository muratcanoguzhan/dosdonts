import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>second works!</p>
    <br />
    <button class="btn">Second Button</button>
    {{console()}}
  `,
  styleUrls: ['./second.component.css'],
  standalone: true,
})
export class SecondComponent {
  console(): void {
    console.log('SecondComponent rendered!');
  }
}
