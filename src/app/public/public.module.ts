import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {CanDeactivateAfterChangeDetectionGuard} from "../pages/can-deactivate-after-change-detection.guard";

const publicRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canDeactivate: [CanDeactivateAfterChangeDetectionGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        data: {
          slideIndex: 31
        },
      },
      {
        path: 'info',
        loadChildren: './information/information.module#InformationModule',
        data: {
          slideIndex: 32
        },
      },
      {
        path: 'servers',
        loadChildren: './servers/servers.module#ServersModule',
        data: {
          slideIndex: 33
        },
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class PublicModule { }
