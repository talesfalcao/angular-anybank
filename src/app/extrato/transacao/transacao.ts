import { CurrencyPipe, DatePipe } from '@angular/common';
import { TipoTransacao, Transacao as TransacaoModel } from './../../modelos/transacao';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css'
})
export class Transacao {
  transacao = input.required<TransacaoModel>();

  valor = computed(() => {
    if(this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  });
}
