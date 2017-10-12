import {AfterViewChecked, ChangeDetectorRef, Component, HostBinding} from '@angular/core';
import {RouteSlideDirectionService} from "../route-slide-direction.service";
import {WaitForChangeDetection} from "../wait-for-change-detection";
import {Subject} from "rxjs/Subject";

@Component({})
export class SlidablePageComponent implements AfterViewChecked, WaitForChangeDetection {
  viewChecked$: Subject<void>;

  constructor(protected cdRef: ChangeDetectorRef, private routeSlideDirectionService: RouteSlideDirectionService){
    this.viewChecked$ = new Subject<void>();
  }
  @HostBinding('@slideHorizontal')
  get slideHorizontal() {
    let slideDirection = this.routeSlideDirectionService.getDirection();
    if(slideDirection) {
      console.log(slideDirection);
      return slideDirection === 'right' ? 'fromRight' : 'fromLeft';
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
