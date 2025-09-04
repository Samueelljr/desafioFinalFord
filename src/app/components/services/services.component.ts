import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service'; // ajuste o caminho

interface Servico {
  nome: string;
  valor: number;
  selecionado?: boolean;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicosComponent implements OnInit, OnDestroy {
  abrirLista = false;
  dataServico = '';
  formaPagamento = 'Dinheiro';

  nomeCliente = 'Cliente';    // será atualizado pelo Firebase
  private sub?: Subscription; // para desinscrever

  servicos: Servico[] = [
    { nome: 'Alinhamento', valor: 120 },
    { nome: 'Balanceamento', valor: 90 },
    { nome: 'Troca de Óleo', valor: 200 },
    { nome: 'Revisão Completa', valor: 800 },
    { nome: 'Troca de Filtros', valor: 150 },
    { nome: 'Pastilha de Freio', valor: 300 },
    { nome: 'Amortecedores', valor: 1200 },
    { nome: 'Correia Dentada', valor: 600 },
    { nome: 'Bateria', valor: 450 },
    { nome: 'Velas de Ignição', valor: 250 },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Observa o usuário logado e atualiza o nome
    this.sub = this.authService.user$.subscribe(user => {
      this.nomeCliente = user?.displayName
        || user?.email?.split('@')[0]
        || 'Cliente';
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  get total() {
    return this.servicos.filter(s => s.selecionado)
      .reduce((sum, s) => sum + s.valor, 0);
  }

  toggleLista() {
    this.abrirLista = !this.abrirLista;
  }

  finalizarPedido() {
    if (this.total === 0 || !this.dataServico) {
      alert('Escolha pelo menos um serviço e uma data.');
      return;
    }

    const servicosSelecionados = this.servicos
      .filter(s => s.selecionado)
      .map(s => `${s.nome} - R$ ${s.valor.toFixed(2)}`)
      .join('\n');

    const mensagem =
    `Olá, meu nome é *${this.nomeCliente}*.
    Gostaria de agendar os seguintes serviços:
    ${servicosSelecionados}

    Total: R$ ${this.total.toFixed(2)}
    Forma de pagamento: ${this.formaPagamento}
    Data desejada: ${this.dataServico}`;

    const numeroWhats = '5571993800488'; 
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
