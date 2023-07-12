import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoejerciciosComponent } from './tipoejercicios.component';

describe('TipoejerciciosComponent', () => {
  let component: TipoejerciciosComponent;
  let fixture: ComponentFixture<TipoejerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoejerciciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoejerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
