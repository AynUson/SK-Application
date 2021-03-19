import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProjectsViewComponent } from './sk-projects-view.component';

describe('SkProjectsViewComponent', () => {
  let component: SkProjectsViewComponent;
  let fixture: ComponentFixture<SkProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkProjectsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
