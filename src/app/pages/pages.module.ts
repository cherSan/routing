import { NgModule } from '@angular/core';
import {RouteSlideDirectionService} from "./route-slide-direction.service";
import {CanDeactivateAfterChangeDetectionGuard} from "./can-deactivate-after-change-detection.guard";

@NgModule({
  providers: [
    RouteSlideDirectionService,
    CanDeactivateAfterChangeDetectionGuard,
  ],
})
export class PagesModule { }
