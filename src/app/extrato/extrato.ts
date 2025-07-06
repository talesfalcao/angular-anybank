import { Transacao } from './transacao/transacao';
import { Component, input } from '@angular/core';
import { Transacao as TransacaoModel} from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [Transacao],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css'
})
export class Extrato {
  transacoes = input.required<TransacaoModel[]>();
}
