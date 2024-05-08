import { Component } from '@angular/core';
import { Dummy1Component } from '../../dummy/dummy1/dummy1.component';

//poner standalone flag & imports array

@Component({
  standalone: true,
  imports: [Dummy1Component],
  selector: 'non-standalone-component',
  templateUrl: './non-standalone-component.component.html',
  styleUrls: ['./non-standalone-component.component.scss']
})
export class NonStandaloneComponent {

}
