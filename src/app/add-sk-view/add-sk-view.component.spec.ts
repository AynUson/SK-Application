import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkViewComponent } from './add-sk-view.component';

describe('AddSkViewComponent', () => {
  let component: AddSkViewComponent;
  let fixture: ComponentFixture<AddSkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
