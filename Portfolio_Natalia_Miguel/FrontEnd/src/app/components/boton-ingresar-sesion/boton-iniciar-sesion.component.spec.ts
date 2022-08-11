import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonIniciarSesionComponent } from './boton-iniciar-sesion.component';

describe('BotonIniciarSesionComponent', () => {
  let component: BotonIniciarSesionComponent;
  let fixture: ComponentFixture<BotonIniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonIniciarSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
