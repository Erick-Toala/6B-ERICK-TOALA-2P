import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciorealizadosComponent } from './ejerciciorealizados.component';

describe('EjerciciorealizadosComponent', () => {
  let component: EjerciciorealizadosComponent;
  let fixture: ComponentFixture<EjerciciorealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciorealizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjerciciorealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
