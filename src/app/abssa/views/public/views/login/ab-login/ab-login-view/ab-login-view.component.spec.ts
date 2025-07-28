import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbLoginViewComponent } from './ab-login-view.component';

describe('AbLoginComponent', () => {
  let component: AbLoginViewComponent;
  let fixture: ComponentFixture<AbLoginViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbLoginViewComponent]
    });
    fixture = TestBed.createComponent(AbLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
