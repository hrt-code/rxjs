import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'pipe-operators', loadChildren: () => import('./pipe-operators/pipe-operators.module').then(mod => mod.PipeOperatorsModule) },
      { path: 'creation-observable', loadChildren: () => import('./creation-observable/creation-observable.module').then(mod => mod.CreationObservableModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
