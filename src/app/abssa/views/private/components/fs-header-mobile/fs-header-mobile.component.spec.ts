import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsHeaderMobileComponent } from './fs-header-mobile.component';

describe('FsHeaderMobileComponent', () => {
  let component: FsHeaderMobileComponent;
  let fixture: ComponentFixture<FsHeaderMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsHeaderMobileComponent]
    });
    fixture = TestBed.createComponent(FsHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
