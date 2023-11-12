import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepClienteComponent } from './cep-cliente.component';

describe('CepClienteComponent', () => {
  let component: CepClienteComponent;
  let fixture: ComponentFixture<CepClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
