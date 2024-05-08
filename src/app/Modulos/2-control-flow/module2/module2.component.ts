
import { Component } from '@angular/core';

@Component({
  selector: 'module2',
  standalone: true,
  imports: [],
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component {
  variable = true;
  displayColor = true;
  items: number[] = [1, 2, 3, 4, 5];
  switchValue = 'A';
}
