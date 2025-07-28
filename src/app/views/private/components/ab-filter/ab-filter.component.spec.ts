import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbFilterComponent } from './ab-filter.component';

describe('AbFilterComponent', () => {
  let component: AbFilterComponent;
  let fixture: ComponentFixture<AbFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbFilterComponent]
    });
    fixture = TestBed.createComponent(AbFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
