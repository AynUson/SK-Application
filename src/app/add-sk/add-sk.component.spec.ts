import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkComponent } from './add-sk.component';

describe('AddSkComponent', () => {
  let component: AddSkComponent;
  let fixture: ComponentFixture<AddSkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
