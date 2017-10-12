import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {CanDeactivateAfterChangeDetectionGuard} from "../pages/can-deactivate-after-change-detection.guard";

const publicRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
          slideIndex: 1
        },
      },
      {
        path: 'info',
        loadChildren: './information/information.module#InformationModule',
        data: {
          slideIndex: 2
        },
      },
      {
        path: 'servers',
        loadChildren: './servers/servers.module#ServersModule',
        data: {
          slideIndex: 3
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
