import {animate, state, style, transition, trigger} from "@angular/animations";
const statesSlidedIn = [
  state('fromLeft' , style({})),
  state('fromRight' , style({}))
];
const styleSlidedLeft = style({transform: 'translateX(-100%)', display: 'none'});
const styleSlidedRight = style({transform: 'translateX(100%)', display: 'none'});
const stateSlidedLeft = state('left', styleSlidedLeft);
const stateSlidedRight = state('right', styleSlidedRight);
const transitionsSlideLeft = [
  transition('fromLeft => void', animate('.3s ease-out', styleSlidedRight)),
  transition('void => fromLeft', [styleSlidedLeft, animate('.3s ease-out')])
];
const transitionsSlideRight = [
  transition('fromRight => void', animate('.3s ease-out', styleSlidedLeft)),
  transition('void => fromRight', [styleSlidedRight, animate('.3s ease-out')])
];
export const slideHorizontal = trigger('slideHorizontal', [
  ...statesSlidedIn,
  stateSlidedLeft,
  stateSlidedRight,
  ...transitionsSlideLeft,
  ...transitionsSlideRight
]);
