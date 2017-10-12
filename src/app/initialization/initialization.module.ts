import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";

const initializationRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(initializationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InitializationModule { }
