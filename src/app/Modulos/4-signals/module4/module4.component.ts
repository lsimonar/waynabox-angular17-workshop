import { Component } from '@angular/core';
import { Exercise1Component } from '../components/exercise1/exercise1.component';
import { Exercise2Component } from '../components/exercise2/exercise2.component';
import { Exercise3Component } from '../components/exercise3/exercise3.component';
import { Exercise4Component } from '../components/exercise4/exercise4.component';

@Component({
  selector: 'app-module4',
  standalone: true,
  imports: [
    Exercise1Component, 
    Exercise2Component, 
    Exercise3Component,
    Exercise4Component
  ],
  templateUrl: './module4.component.html',
  styleUrl: './module4.component.scss'
})
export class Module4Component {
  e4Counter: number = 0;
  e4ShowCounter: boolean = false;
   
  e4Increment() {
    this.e4Counter++;
  }
  e4Toggle() {
    this.e4ShowCounter = !this.e4ShowCounter;
  }
}
