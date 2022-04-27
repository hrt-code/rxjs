import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationObservableComponent } from './creation-observable.component';
import { FromEventComponent } from './from-event/from-event.component';

const routes: Routes = [
  {
    path: '',
    component: CreationObservableComponent,
    children: [
      { path: 'from-event', component: FromEventComponent },
    ]
  },
];


@NgModule({

  declarations: [
    CreationObservableComponent,
    FromEventComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})

export class CreationObservableModule { }
