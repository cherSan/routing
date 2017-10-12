import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {RouteSlideDirectionService} from "../../pages/route-slide-direction.service";
import _ from 'lodash';
import {slideVertical} from "../../pages/router-animations";
import {VerticalSlidablePageComponent} from "../../pages/vertical-slidable-page/vertical-slidable-page.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [slideVertical]
})
export class LayoutComponent extends VerticalSlidablePageComponent {
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
          this.routeSlideDirectionService.setDirection(leavingSlideIndex > enteringSlideIndex ? 'forward' : 'backward')
        } else {
          this.routeSlideDirectionService.setDirection(null);
        }
      }
    });
  }
}
