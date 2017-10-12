import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: '../initialization/initialization.module#InitializationModule',
    data: {
      slideIndex: 1
    },
  },
  {
    path: 'p',
    loadChildren: '../public/public.module#PublicModule',
    data: {
      slideIndex: 2
    },
  },
  {
    path: 'a',
    loadChildren: '../authorization/authorization.module#AuthorizationModule',
    data: {
      slideIndex: 3
    },
  },
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
