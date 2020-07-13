import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Item2Component} from './item2/item2.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Item2', component: Item2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
