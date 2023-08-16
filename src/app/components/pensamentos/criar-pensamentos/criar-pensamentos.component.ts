import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent {
  constructor(private service: PensamentoService, private router: Router) {}

  pensamento: Pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listar']);
  }
}
