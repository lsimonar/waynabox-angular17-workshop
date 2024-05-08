import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'exercise2',
  standalone: true,
  imports: [],
  templateUrl: './exercise2.component.html',
  styleUrl: '../../module4/module4.component.scss'
})
export class Exercise2Component {
  counter = signal(0);
  shouldShowCounter = signal(false);

  //arreglar este computed
  doubleCounter = computed(() => 
  {
    if (this.shouldShowCounter()) {
      return this.counter() * 2;
    }
    return 'No se muestra el contador';
  });

  increment() {
    this.counter.update(c => c + 1);
  }
}
