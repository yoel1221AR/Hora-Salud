import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsHeaderComponent } from './fs-header.component';

describe('FsHeaderComponent', () => {
  let component: FsHeaderComponent;
  let fixture: ComponentFixture<FsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsHeaderComponent]
    });
    fixture = TestBed.createComponent(FsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
