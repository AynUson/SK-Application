import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkActivitiesViewComponent } from './sk-activities-view.component';

describe('SkActivitiesViewComponent', () => {
  let component: SkActivitiesViewComponent;
  let fixture: ComponentFixture<SkActivitiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkActivitiesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkActivitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
