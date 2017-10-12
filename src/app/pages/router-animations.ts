import {animate, state, style, transition, trigger} from "@angular/animations";
const statesSlidedIn = [
  state('fromLeft' , style({})),
  state('fromRight' , style({})),
  state('fromTop' , style({})),
  state('fromBottom' , style({}))
];
const styleSlidedLeft = style({transform: 'translateX(-100%)', display: 'none'});
const styleSlidedRight = style({transform: 'translateX(100%)', display: 'none'});
const styleSlidedTop = style({transform: 'translateY(-100%)', display: 'none'});
const styleSlidedBottom = style({transform: 'translateY(100%)', display: 'none'});

const stateSlidedLeft = state('left', styleSlidedLeft);
const stateSlidedRight = state('right', styleSlidedRight);
const stateSlidedTop = state('top', styleSlidedTop);
const stateSlidedBottom = state('bottom', styleSlidedBottom);
const transitionsSlideLeft = [
  transition('forward => void', animate('.3s ease-out', styleSlidedRight)),
  transition('void => forward', [styleSlidedLeft, animate('.3s ease-out')])
];
const transitionsSlideRight = [
  transition('backward => void', animate('.3s ease-out', styleSlidedLeft)),
  transition('void => backward', [styleSlidedRight, animate('.3s ease-out')])
];
const transitionsSlideTop = [
  transition('forward => void', animate('.3s ease-out', styleSlidedBottom)),
  transition('void => forward', [styleSlidedTop, animate('.3s ease-out')])
];
const transitionsSlideBottom = [
  transition('backward => void', animate('.3s ease-out', styleSlidedTop)),
  transition('void => backward', [styleSlidedBottom, animate('.3s ease-out')])
];
export const slideHorizontal = trigger('slideHorizontal', [
  ...statesSlidedIn,
  stateSlidedLeft,
  stateSlidedRight,
  ...transitionsSlideLeft,
  ...transitionsSlideRight
]);
export const slideVertical = trigger('slideVertical', [
  ...statesSlidedIn,
  stateSlidedTop,
  stateSlidedBottom,
  ...transitionsSlideTop,
  ...transitionsSlideBottom
]);
