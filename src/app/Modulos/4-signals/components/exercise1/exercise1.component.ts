import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'exercise1',
  standalone: true,
  imports: [],
  templateUrl: './exercise1.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise1Component {
    counter = signal(1);
    doubleCounter = computed(() => this.counter() * 2);

    e1Increment() {
      this.counter.set(this.counter() + 1);
    }   

    e1Decrement() {
      this.counter.set(this.counter() - 1);
    }   
}
