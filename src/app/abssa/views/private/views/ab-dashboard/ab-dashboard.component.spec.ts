import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbDashboardComponent } from './ab-dashboard.component';

describe('AbDashboardComponent', () => {
  let component: AbDashboardComponent;
  let fixture: ComponentFixture<AbDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbDashboardComponent]
    });
    fixture = TestBed.createComponent(AbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
