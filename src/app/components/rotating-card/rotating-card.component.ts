import { Component } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css'],
})
export class RotatingCardComponent {
  changeName() {
    throw new Error('Method not implemented.');
  }
  firstName = 'abdellaoui';
  lastName = 'salah';
  job='CEO';
  path='';
}
