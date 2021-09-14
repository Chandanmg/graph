import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';

const routes: Routes = [
  { path: '', component: New1Component },
  { path: 'new2', component: New2Component },
  { path: 'new3', component: New3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
