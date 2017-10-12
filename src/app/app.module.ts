import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavigationModule} from "./navigation/navigation.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PagesModule} from "./pages/pages.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NavigationModule,
    PagesModule,
    FlexLayoutModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
