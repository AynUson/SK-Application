import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabataanInfoComponent } from './kabataan-info.component';

describe('KabataanInfoComponent', () => {
  let component: KabataanInfoComponent;
  let fixture: ComponentFixture<KabataanInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabataanInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KabataanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
