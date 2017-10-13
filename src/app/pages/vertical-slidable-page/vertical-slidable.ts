import {AfterViewChecked, ChangeDetectorRef, Component, HostBinding} from '@angular/core';
import {RouteSlideDirectionService} from "../route-slide-direction.service";
import {WaitForChangeDetection} from "../wait-for-change-detection";
import {Subject} from "rxjs/Subject";

@Component({
  template: '<div>Some problems</div>'
})
export class VerticalSlidable implements AfterViewChecked, WaitForChangeDetection {
  viewChecked$: Subject<void>;
  constructor(protected cdRef: ChangeDetectorRef, protected routeSlideDirectionService: RouteSlideDirectionService){
    this.viewChecked$ = new Subject<void>();
  }
  @HostBinding('@slideVertical')
  get slideVertical() {
    let slideDirection = this.routeSlideDirectionService.getVerticalDirection();
    if( slideDirection ) {
      return slideDirection;
    }
    return null;
  }
  waitForChangeDetection(): Promise<boolean>{
    this.cdRef.detectChanges();
    return new Promise((resolve) => this.viewChecked$.subscribe(() => resolve(true)));
  }

  ngAfterViewChecked(){
    this.viewChecked$.next();
  }
}
