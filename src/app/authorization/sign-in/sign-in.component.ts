import { Component } from '@angular/core';
import {slideHorizontal} from "../../pages/router-animations";
import {SlidablePageComponent} from "../../pages/slidable-page/slidable-page.component";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [slideHorizontal],
})
export class SignInComponent extends SlidablePageComponent {}
