import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkDashboardComponent } from './sk-dashboard.component';

describe('SkDashboardComponent', () => {
  let component: SkDashboardComponent;
  let fixture: ComponentFixture<SkDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
