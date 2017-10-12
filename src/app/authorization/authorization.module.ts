import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {CommonModule} from "@angular/common";
import { LayoutComponent } from './layout/layout.component';
import {CanDeactivateAfterChangeDetectionGuard} from "../pages/can-deactivate-after-change-detection.guard";

const authorizationRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canDeactivate: [CanDeactivateAfterChangeDetectionGuard],
    children: [
        {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          slideIndex: 21
        },
        canDeactivate: [CanDeactivateAfterChangeDetectionGuard],
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
          slideIndex: 22
        },
        canDeactivate: [CanDeactivateAfterChangeDetectionGuard],
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authorizationRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    LayoutComponent,
  ]
})
export class AuthorizationModule { }
