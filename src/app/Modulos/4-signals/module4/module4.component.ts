import { Component } from '@angular/core';
import { Exercise1Component } from '../components/exercise1/exercise1.component';

@Component({
  selector: 'app-module4',
  standalone: true,
  imports: [Exercise1Component],
  templateUrl: './module4.component.html',
  styleUrl: './module4.component.scss'
})
export class Module4Component {
  counter: number = 0;

  increment() {
    this.counter++;
  }
}
