import { TestBed, async, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UtilService } from './util-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  const utilService = new UtilService();
  let formulario: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule
      ],
      providers: [UtilService, FormBuilder, FormGroup]
    }).compileComponents();

    formulario.group({
      quantidade: [''],
      nome: [''],
      autores: this.fb.array([])
    });
  }));

  it('Criação do app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Verificando valores iniciais`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.passo).toEqual('inicio');
    expect(app.autoresList.length).toEqual(0);
  });

  // it(`validando Serviço`, () => {
  //   expect(utilService.formatarNome('Guimaraes')).toEqual('GUIMARAES');
  //   expect(utilService.formatarNome('Roberto Nicoletti')).toEqual('ROBERTO');
  //   expect(utilService.formatarNome('Roberto Nicoletti Junior ')).toEqual(
  //     'ROBERTO'
  //   );
  //   expect(utilService.formatarNome('Joao Silva Neto')).toEqual(
  //     'SILVA NETO, Joao'
  //   );
  //   expect(utilService.formatarNome('Joao Neto')).toEqual('NETO, Joao');
  //   expect(utilService.formatarNome('João da Silva')).toEqual('ROBERTO');
  // });
});
