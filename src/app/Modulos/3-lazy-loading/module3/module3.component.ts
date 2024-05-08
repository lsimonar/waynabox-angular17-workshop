import { Component } from '@angular/core';
import { Module1Module } from '../../1-standalone-components/module1.module';

@Component({
  selector: 'app-module3',
  standalone: true,
  imports: [Module1Module],
  templateUrl: './module3.component.html',
  styleUrl: './module3.component.scss'
})
export class Module3Component {

}
