import { Component } from '@angular/core';
import { Exercise1Component } from '../components/exercise1/exercise1.component';
import { Exercise2Component } from '../components/exercise2/exercise2.component';
import { Exercise3Component } from '../components/exercise3/exercise3.component';
import { Exercise4Component } from '../components/exercise4/exercise4.component';
import { Exercise5Component } from '../components/exercise5/exercise5.component';

@Component({
  selector: 'app-module4',
  standalone: true,
  imports: [
    Exercise1Component, 
    Exercise2Component, 
    Exercise3Component,
    Exercise4Component,
    Exercise5Component
  ],
  templateUrl: './module4.component.html',
  styleUrl: './module4.component.scss'
})
export class Module4Component {
  e4Counter: number = 0;
  e4ShowCounter: boolean = false;
  e5Counter: number = 0;
  e5ShowCounter: boolean = false;
   
  e4Increment() {
    this.e4Counter++;
  }
  e4Toggle() {
    this.e4ShowCounter = !this.e4ShowCounter;
  }
  e5Increment() {
    this.e5Counter++;
  }
  e5Toggle() {
    this.e5ShowCounter = !this.e5ShowCounter;
  }
}
