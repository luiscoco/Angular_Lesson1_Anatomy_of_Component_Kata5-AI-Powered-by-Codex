import { Component, signal } from '@angular/core';
import { BlueBox } from './blue-box/blue-box';
import { RedBox } from './red-box/red-box';

@Component({
  selector: 'app-root',
  imports: [RedBox, BlueBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('style-leakage');
}
