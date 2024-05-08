import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonStandaloneComponent } from './Modulos/1-standalone-components/ejercicios/exercice-1/non-standalone-component.component';
import { IndexComponent } from './index/index.component';
import { Module2Component } from './Modulos/2-control-flow/module2/module2.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'modulo-1',
    component: NonStandaloneComponent
  },
  {
    path: 'modulo-2',
    component: Module2Component
  },
  {
    path: 'modulo-3',
    loadChildren: () => import('./Modulos/3-lazy-loading/module3/module3.module').then(m => m.Module3Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
