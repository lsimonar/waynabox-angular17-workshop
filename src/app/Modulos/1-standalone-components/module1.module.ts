import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonStandaloneComponent } from './ejercicios/exercice-1/non-standalone-component.component';
import { Dummy1Component } from './dummy/dummy1/dummy1.component';
import { Dummy2Component } from './dummy/dummy2/dummy2.component';



@NgModule({
  declarations: [
    NonStandaloneComponent,
    Dummy1Component,
    Dummy2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Dummy2Component
  ]
})
export class Module1Module { }
