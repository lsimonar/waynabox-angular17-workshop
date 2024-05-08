import { Component, EventEmitter, Input, Output, computed } from '@angular/core';

@Component({
  selector: 'exercise5',
  standalone: true,
  imports: [],
  templateUrl: './exercise5.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise5Component {
    @Input() counter = 0;
    @Input() showCounter = false;
    @Output() counterChange = new EventEmitter<number>();
    @Output() showCounterChange = new EventEmitter<boolean>();
    doubleCounter: number | string = 0;

    ngOnInit() {
        this.doubleCounter = this.showCounter ? this.counter * 2 : 'No se muestra el contador';
    }

    ngOnChanges() {
        this.doubleCounter = this.showCounter ? this.counter * 2 : 'No se muestra el contador';
    }

    increment() {
        this.counter++;
        this.counterChange.emit(this.counter);
    }

    toggle() {
        this.showCounter = !this.showCounter;
        this.showCounterChange.emit(this.showCounter);
    }
}
