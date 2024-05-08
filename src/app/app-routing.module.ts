import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonStandaloneComponent } from './Modulos/1-standalone-components/ejercicios/exercice-1/non-standalone-component.component';
import { IndexComponent } from './index/index.component';
import { Module2Component } from './Modulos/2-control-flow/module2/module2.component';
import { Module3Component } from './Modulos/3-lazy-loading/module3/module3.component';
import { Module4Component } from './Modulos/4-signals/module4/module4.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'modulo-1',
    loadComponent: () => import('./Modulos/1-standalone-components/ejercicios/exercice-1/non-standalone-component.component').then(m => m.NonStandaloneComponent)
  },
  {
    path: 'modulo-2',
    loadComponent: () => import('./Modulos/2-control-flow/module2/module2.component').then(m => m.Module2Component)
  },
  {
    path: 'modulo-3',
    loadChildren: () => import('./Modulos/3-lazy-loading/module3/module3.module').then(m => m.Module3Module)
  },
  {
    path: 'modulo-4',
    loadComponent: () => import('./Modulos/4-signals/module4/module4.component').then(m => m.Module4Component)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
