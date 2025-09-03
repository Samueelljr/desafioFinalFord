import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Servico {
  nome: string;
  valor: number;
  selecionado?: boolean;
}

@Component({
  selector: 'app-services',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
   abrirLista = false;
   dataServico: string = '';
   formaPagamento: string = 'Dinheiro';
   nomeCliente: string = localStorage.getItem('nomeCliente') || 'Cliente';

   servicos: Servico[] = [
    { nome: 'Alinhamento', valor: 120 },
    { nome: 'Balanceamento', valor: 90 },
    { nome: 'Troca de Óleo', valor: 200 },
    { nome: 'Revisão Completa', valor: 800 },
    { nome: 'Troca de Filtros', valor: 150 },
    { nome: 'Troca de Pastilha de Freio', valor: 300 },
    { nome: 'Troca de Amortecedores', valor: 1200 },
    { nome: 'Troca de Correia Dentada', valor: 600 },
    { nome: 'Troca de Bateria', valor: 450 },
    { nome: 'Troca de Velas de Ignição', valor: 250 }
  ];

  get total() {
    return this.servicos
      .filter(s => s.selecionado)
      .reduce((sum, s) => sum + s.valor, 0);
  }

  toggleLista() {
    this.abrirLista = !this.abrirLista;
  }
  
  finalizarPedido() {
    const servicosSelecionados = this.servicos
      .filter(s => s.selecionado)
      .map(s => `${s.nome} - R$ ${s.valor}`)
      .join('%0A')

      const mensagem = `*PEDIDO DE SERVIÇO*
      Cliente: *${this.nomeCliente}*.%0A
      Solicitou os seguintes:%0A
      ${servicosSelecionados}%0A
      %0ATotal: R$ ${this.total}%0A
      Forma de pagamento: ${this.formaPagamento}%0A
      Data desejada: ${this.dataServico}`;

      const numeroWhats = '5571993800488';
      const url = `https://wa.me/${numeroWhats}?text=${mensagem}`;
      window.open(url, '_blanck');
  }
}
