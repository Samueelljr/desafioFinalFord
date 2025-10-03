import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData, Timestamp } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';

interface Pedido {
  cliente: string;
  total: number;
  formaPagamento: string;
  createdAt: any;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pedidos$!: Observable<Pedido[]>;
  totalPedidos = 0;
  faturamento = 0;
  ultimoPedido = '-';

  constructor(private firestore: Firestore,
    private router: Router
  ) {}

  ngOnInit() {
    const pedidosRef = collection(this.firestore, 'servicos');

    this.pedidos$ = collectionData(pedidosRef, { idField: 'id' }) as Observable<Pedido[]>;

    this.pedidos$.pipe(
      map(pedidos => {
        this.totalPedidos = pedidos.length;

        this.faturamento = pedidos.reduce((sum, p) => sum + Number(p.total || 0), 0);

        if (pedidos.length > 0) {
          const ultimo = pedidos.reduce((a, b) =>
            (this.getDate(a.createdAt) > this.getDate(b.createdAt)) ? a : b
          );
          this.ultimoPedido = this.getDate(ultimo.createdAt).toLocaleString();
        } else {
          this.ultimoPedido = '-';
        }

        return pedidos;
      })
    ).subscribe();
  }

  private getDate(createdAt: any): Date {
    if (!createdAt) return new Date(0);

    if (createdAt.toDate) {
      return createdAt.toDate();
    }

    if (createdAt.seconds) {
      return new Date(createdAt.seconds * 1000);
    }

    return new Date(createdAt);
  }

  returnHome() {
    this.router.navigate(['/']);
  }
}
