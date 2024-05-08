import { Component } from '@angular/core';
import { Module1Module } from '../../1-standalone-components/module1.module';
import { NonStandaloneComponent } from '../../1-standalone-components/ejercicios/exercice-1/non-standalone-component.component';

@Component({
  selector: 'app-module3',
  standalone: true,
  imports: [NonStandaloneComponent],
  templateUrl: './module3.component.html',
  styleUrl: './module3.component.scss'
})
export class Module3Component {

}
