import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkKabataansViewComponent } from './sk-kabataans-view.component';

describe('SkKabataansViewComponent', () => {
  let component: SkKabataansViewComponent;
  let fixture: ComponentFixture<SkKabataansViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkKabataansViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkKabataansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
