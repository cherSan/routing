import { NgModule } from '@angular/core';
import {RouteSlideDirectionService} from "./route-slide-direction.service";
import {CanDeactivateAfterChangeDetectionGuard} from "./can-deactivate-after-change-detection.guard";
import {HorizontalSlidable} from "./slidable-page/horizontal-slidable";
import {VerticalSlidable} from "./vertical-slidable-page/vertical-slidable";

@NgModule({
  providers: [
    RouteSlideDirectionService,
    CanDeactivateAfterChangeDetectionGuard,
  ],
  declarations: [
    HorizontalSlidable,
    VerticalSlidable,
  ],
  entryComponents: [
    HorizontalSlidable,
    VerticalSlidable,
  ]
})
export class PagesModule { }
