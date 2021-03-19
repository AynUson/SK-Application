import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkProjectsComponent } from './sk-projects.component';

describe('SkProjectsComponent', () => {
  let component: SkProjectsComponent;
  let fixture: ComponentFixture<SkProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
