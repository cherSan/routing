import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import _ from 'lodash';
import {RouteSlideDirectionService} from "../../pages/route-slide-direction.service";
import {HorizontalSlidable} from "../../pages/slidable-page/horizontal-slidable";
import {slideHorizontal} from "../../pages/router-animations";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [slideHorizontal],
})
export class LayoutComponent extends HorizontalSlidable {
  constructor(private router: Router,
              private route: ActivatedRoute,
              protected routeSlideDirectionService: RouteSlideDirectionService,
              cdRef: ChangeDetectorRef,) {
    super(cdRef, routeSlideDirectionService);
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        let leavingSlideIndex = _.get(event, 'state.root.firstChild.firstChild.firstChild.data.slideIndex');
        let enteringSlideIndex = _.get(this.route, 'snapshot.firstChild.data.slideIndex');
        console.log(leavingSlideIndex, enteringSlideIndex)

        if (leavingSlideIndex && enteringSlideIndex) {
          this.routeSlideDirectionService.setVerticalDirection(leavingSlideIndex > enteringSlideIndex ? 'forward' : 'backward')
        } else {
          this.routeSlideDirectionService.setVerticalDirection(null);
        }
      }
    });
  }
}
