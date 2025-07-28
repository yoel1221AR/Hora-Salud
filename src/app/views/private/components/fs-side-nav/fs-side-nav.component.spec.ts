import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsSideNavComponent } from './fs-side-nav.component';

describe('FsSideNavComponent', () => {
  let component: FsSideNavComponent;
  let fixture: ComponentFixture<FsSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsSideNavComponent]
    });
    fixture = TestBed.createComponent(FsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
