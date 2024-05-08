import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'exercise1',
  standalone: true,
  imports: [],
  templateUrl: './exercise1.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise1Component implements OnInit, OnChanges {
    @Input() counter: number = 0;
    doubleCounter: number = 0;

    ngOnInit() {
        this.doubleCounter = this.counter * 2;
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.doubleCounter = this.counter * 2;
    }
}
