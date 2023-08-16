import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Comunicação',
      autoria: 'Angular',
      modelo: 'modelo3',
    },
    {
      conteudo: 'passo infor',
      autoria: 'Pai',
      modelo: 'modelo2',
    },
  ];
}
