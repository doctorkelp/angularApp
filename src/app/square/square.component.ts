import { Component, Input } from '@angular/core';
// This is a dumb component
@Component({
  selector: 'app-square',
  template: `
    <p>
      <button>{{value}}</button>
  </p>
  `,
  styles: [
  ]
})
export class SquareComponent  {
@Input() value: 'X' | 'O';

constructor() {
  this.value = 'X';
}

}
