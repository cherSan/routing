import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {CommonModule} from "@angular/common";

const authorizationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
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
  ]
})
export class AuthorizationModule { }
