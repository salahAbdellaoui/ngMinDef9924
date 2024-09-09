import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
<<<<<<< HEAD
  color = 'red';
  defaultColor() {
    this.color = 'red';
=======
  // State
  defaultColor = 'red';
  color = this.defaultColor;

  // coùportements
  changeColor(newColorInput: HTMLInputElement): void {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset(): void {
    this.color = this.defaultColor;
>>>>>>> 5b15afe26826febf97fb7fb80b116ca2490843e4
  }
}
