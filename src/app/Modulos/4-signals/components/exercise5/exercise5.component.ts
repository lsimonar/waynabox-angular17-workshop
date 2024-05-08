import { Component, EventEmitter, Input, Output, computed, model } from '@angular/core';

@Component({
  selector: 'exercise5',
  standalone: true,
  imports: [],
  templateUrl: './exercise5.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise5Component {
    counter = model(0);
    showCounter = model(false);
    doubleCounter = computed(() => this.showCounter() ? this.counter() * 2 : 'No se muestra el contador');

    increment() {
        this.counter.set(this.counter() + 1);
    }

    toggle() {
        this.showCounter.set(!this.showCounter());
    }
}
