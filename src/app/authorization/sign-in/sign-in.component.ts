import { Component } from '@angular/core';
import {VerticalSlidable} from "../../pages/vertical-slidable-page/vertical-slidable";
import {slideVertical} from "../../pages/router-animations";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [slideVertical],
})
export class SignInComponent extends VerticalSlidable {}
