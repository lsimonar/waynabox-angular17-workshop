import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'exercise4',
  standalone: true,
  imports: [],
  templateUrl: './exercise4.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise4Component implements OnInit, OnChanges{
  @Input() counter: number = 0;
  @Input() showCounter: boolean = false;
  doubleCounter: number | string = 0;

  ngOnInit() {
    this.setDoubleCounter();
  }

  ngOnChanges(): void {
    this.setDoubleCounter();
  }

  setDoubleCounter() {
    if(this.showCounter) {
      this.doubleCounter = this.counter * 2;
    } else {
      this.doubleCounter = 'No se muestra el contador';
    }  
  }

}
