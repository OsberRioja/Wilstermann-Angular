import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoMasculinoComponent } from './equipo-masculino.component';

describe('EquipoMasculinoComponent', () => {
  let component: EquipoMasculinoComponent;
  let fixture: ComponentFixture<EquipoMasculinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoMasculinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
