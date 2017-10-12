import { Component } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {RouteSlideDirectionService} from "../../pages/route-slide-direction.service";
import _ from 'lodash';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  constructor(private router: Router, private route: ActivatedRoute, private routeSlideDirectionService: RouteSlideDirectionService){
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        let leavingSlideIndex = _.get(event, 'state.root.firstChild.firstChild.firstChild.data.slideIndex');
        let enteringSlideIndex = _.get(this.route, 'snapshot.firstChild.firstChild.data.slideIndex');
        if(leavingSlideIndex && enteringSlideIndex){
          this.routeSlideDirectionService.setDirection(leavingSlideIndex > enteringSlideIndex ? 'right' : 'left')
        } else {
          this.routeSlideDirectionService.setDirection(null);
        }
      }
    });
  }
}
