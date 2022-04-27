import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeOperatorsComponent } from './pipe-operators.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PipeOperatorsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PipeOperatorsComponent]
})
export class PipeOperatorsModule { }
