import {Component} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {RouteSlideDirectionService} from "./pages/route-slide-direction.service";
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected routeSlideDirectionService: RouteSlideDirectionService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        let leavingSlideIndex = _.get(event, 'state.root.firstChild.data.slideIndex');
        let enteringSlideIndex = _.get(this.route, 'snapshot.firstChild.data.slideIndex');
        if(leavingSlideIndex && enteringSlideIndex){
          this.routeSlideDirectionService.setDirection(leavingSlideIndex > enteringSlideIndex ? 'forward' : 'backward')
        } else {
          this.routeSlideDirectionService.setDirection(null);
        }
      }
    });
  }
}
