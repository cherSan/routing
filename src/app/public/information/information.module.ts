import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {CanDeactivateAfterChangeDetectionGuard} from "../../pages/can-deactivate-after-change-detection.guard";

const informationRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canDeactivate: [CanDeactivateAfterChangeDetectionGuard]
  }
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(informationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InformationModule { }
