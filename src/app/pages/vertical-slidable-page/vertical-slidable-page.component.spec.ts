import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSlidablePageComponent } from './vertical-slidable-page.component';

describe('VerticalSlidablePageComponent', () => {
  let component: VerticalSlidablePageComponent;
  let fixture: ComponentFixture<VerticalSlidablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSlidablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSlidablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
