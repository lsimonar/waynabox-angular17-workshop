import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonStandaloneComponent } from './exercises/1-standalone-components/components/non-standalone-component/non-standalone-component.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'modulo-1',
    component: NonStandaloneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
