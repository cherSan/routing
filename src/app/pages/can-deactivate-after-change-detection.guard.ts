import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {WaitForChangeDetection} from "./wait-for-change-detection";

@Injectable()
export class CanDeactivateAfterChangeDetectionGuard implements CanDeactivate<WaitForChangeDetection> {
  canDeactivate(component: WaitForChangeDetection): Promise<boolean> {
    return component.waitForChangeDetection();
  }
}
