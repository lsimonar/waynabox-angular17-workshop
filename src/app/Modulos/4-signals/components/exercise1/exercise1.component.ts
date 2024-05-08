import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercise1',
  standalone: true,
  imports: [],
  templateUrl: './exercise1.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise1Component implements OnInit {
    counter: number = 1;
    doubleCounter: number = 0;

    ngOnInit() {
        this.doubleCounter = this.counter * 2;
    }

    e1Increment() {
      this.counter++;
      this.doubleCounter = this.counter * 2;
    }   

    e1Decrement() {
      this.counter--;
      this.doubleCounter = this.counter * 2;
    }   
}
