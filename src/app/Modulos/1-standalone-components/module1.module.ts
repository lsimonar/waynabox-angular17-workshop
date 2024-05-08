import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dummy1Component } from './dummy/dummy1/dummy1.component';
import { Dummy2Component } from './dummy/dummy2/dummy2.component';



@NgModule({
  declarations: [
    Dummy2Component
  ],
  imports: [
    Dummy1Component,
    CommonModule
  ],
  exports: [
    Dummy2Component,
    Dummy1Component,
  ]
})
export class Module1Module { }
