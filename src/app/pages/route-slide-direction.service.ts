import { Injectable } from '@angular/core';

@Injectable()
export class RouteSlideDirectionService {

  direction: string;
  verticalDirection: string;

  setDirection(direction: string) {
    this.direction = direction;
  }
  getDirection(): string {
    return this.direction;
  }
  setVerticalDirection(direction: string) {
    this.verticalDirection = direction;
  }
  getVerticalDirection(): string {
    return this.verticalDirection;
  }
}
