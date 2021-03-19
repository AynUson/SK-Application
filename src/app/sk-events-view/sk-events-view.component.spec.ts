import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkEventsViewComponent } from './sk-events-view.component';

describe('SkEventsViewComponent', () => {
  let component: SkEventsViewComponent;
  let fixture: ComponentFixture<SkEventsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkEventsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkEventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
