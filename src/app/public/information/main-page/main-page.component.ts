import { Component } from '@angular/core';
import {VerticalSlidable} from "../../../pages/vertical-slidable-page/vertical-slidable";
import {slideVertical} from "../../../pages/router-animations";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [slideVertical],
})
export class MainPageComponent extends VerticalSlidable {}
