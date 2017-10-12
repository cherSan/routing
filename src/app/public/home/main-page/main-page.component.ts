import { Component } from '@angular/core';
import {slideHorizontal} from "../../../pages/router-animations";
import {SlidablePageComponent} from "../../../pages/slidable-page/slidable-page.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [slideHorizontal],
})
export class MainPageComponent extends SlidablePageComponent {}
