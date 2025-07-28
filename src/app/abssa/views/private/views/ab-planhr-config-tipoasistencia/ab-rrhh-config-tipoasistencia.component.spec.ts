import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbRRHHTipoasisComponent } from './ab-rrhh-config-tipoasistencia.component';

describe('AbPlanhrConfigTipoasistenciaComponent', () => {
  let component: AbRRHHTipoasisComponent;
  let fixture: ComponentFixture<AbRRHHTipoasisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbRRHHTipoasisComponent]
    });
    fixture = TestBed.createComponent(AbRRHHTipoasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
