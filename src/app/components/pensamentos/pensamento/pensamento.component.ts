import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love angular',
    autoria: 'Walisson',
    modelo: 'modelo3',
  };

  larguraCard(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
