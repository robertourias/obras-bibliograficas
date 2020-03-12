import { Component, OnInit } from '@angular/core';
import { UtilService } from './util-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Obras Bibliográficas';
  passo: string;
  quantidade: number;
  autoresInput: Array<any>;
  autoresResult: Array<string>;

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.iniciar();
  }

  iniciar(): void {
    this.passo = 'inicio';
    this.quantidade = 0;
    this.autoresInput = [];
    this.autoresResult = [];
  }

  gerarCampos(): void {
    this.passo = 'autores';

    for (let i = 0; i < this.quantidade; i++) {
      this.autoresInput.push({ id: i, nome: '' });
    }
  }

  formatar(): void {
    this.passo = 'formatacao';
    this.autoresResult = this.autoresInput.map(item => {
      return this.utilService.formatarNome(item.nome);
    });
  }
}
