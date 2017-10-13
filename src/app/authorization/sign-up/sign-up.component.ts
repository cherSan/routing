import { Component } from '@angular/core';
import {VerticalSlidable} from "../../pages/vertical-slidable-page/vertical-slidable";
import {slideVertical} from "../../pages/router-animations";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [slideVertical],
})
export class SignUpComponent extends VerticalSlidable {}
