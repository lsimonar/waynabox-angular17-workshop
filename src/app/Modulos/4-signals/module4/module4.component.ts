import { Component } from '@angular/core';
import { Exercise1Component } from '../components/exercise1/exercise1.component';
import { Exercise2Component } from '../components/exercise2/exercise2.component';
import { Exercise3Component } from '../components/exercise3/exercise3.component';

@Component({
  selector: 'app-module4',
  standalone: true,
  imports: [
    Exercise1Component, 
    Exercise2Component, 
    Exercise3Component
  ],
  templateUrl: './module4.component.html',
  styleUrl: './module4.component.scss'
})
export class Module4Component {
  counter: number = 0;

  increment() {
    this.counter++;
  }
}
