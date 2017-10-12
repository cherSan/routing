import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidablePageComponent } from './slidable-page.component';

describe('SlidablePageComponent', () => {
  let component: SlidablePageComponent;
  let fixture: ComponentFixture<SlidablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
