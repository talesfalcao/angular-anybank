import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { TipoTransacao, Transacao } from './modelos/transacao';
import { Extrato } from "./extrato/extrato";

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao, Extrato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch(transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;
        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;
        default:
          throw new Error('Tipo de transação não identificado');
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);

    console.log(this.transacoes());
  }
}
