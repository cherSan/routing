import { Component } from '@angular/core';
import {slideHorizontal} from "../../pages/router-animations";
import {SlidablePageComponent} from "../../pages/slidable-page/slidable-page.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [slideHorizontal],
})
export class SignUpComponent extends SlidablePageComponent {}
