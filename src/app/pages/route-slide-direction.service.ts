import { Injectable } from '@angular/core';

@Injectable()
export class RouteSlideDirectionService {

  direction: string;

  setDirection(direction: string) {
    this.direction = direction;
  }
  getDirection(): string {
    return this.direction;
  }
}
