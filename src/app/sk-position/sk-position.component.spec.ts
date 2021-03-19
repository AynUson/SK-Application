import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkPositionComponent } from './sk-position.component';

describe('SkPositionComponent', () => {
  let component: SkPositionComponent;
  let fixture: ComponentFixture<SkPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
