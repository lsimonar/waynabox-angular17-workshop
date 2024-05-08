import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'exercise4',
  standalone: true,
  imports: [],
  templateUrl: './exercise4.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise4Component{
  counter = input(0);
  showCounter = input(false);
  doubleCounter = computed(() => this.showCounter() ? this.counter() * 2 : 'No se muestra el contador');

}
