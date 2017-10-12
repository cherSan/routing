import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../initialization/initialization.module#InitializationModule'
  },
  {
    path: 'p',
    loadChildren: '../public/public.module#PublicModule'
  },
  {
    path: 'a',
    loadChildren: '../authorization/authorization.module#AuthorizationModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class NavigationModule { }
