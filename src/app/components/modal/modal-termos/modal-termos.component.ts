import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-termos',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `


  <h2 mat-dialog-title>Termos de Privacidade - Ford</h2>

    <mat-dialog-content (scroll)="onScroll($event)">
      
      <p>
        Nós da Ford Motor Company Brasil Ltda (doravante denominado "Ford" ou "nós" ou "nos") reconhecemos a importância da privacidade, da segurança e da proteção de dados para seus clientes e para todos os titulares de dados que possam ter seus Dados Pessoais (conforme definido abaixo) ou de outra natureza processados, por meio dos sistemas Ford. Queremos que Você tenha grande satisfação visitando nosso site Ford.com.br (doravante denominado “Site”) e que saiba que a confidencialidade das informações aqui deixadas está assegurada de acordo com esta Política de Privacidade (“Política”). A Ford emprega os melhores esforços para fornecer as proteções adequadas em todas as suas operações e para implementar as políticas e os procedimentos mais consistentes e rigorosos.

Esta Política informa a Você, que visita o Site da Ford ou que fornece dados, independente de sua natureza (“Você”), as práticas de privacidade da Ford e indica as escolhas que Você pode fazer no âmbito da coleta e utilização de dados que refiram-se a Você.

Para os fins desta Política de Privacidade, considera-se dados pessoais (doravante denominado “Dados Pessoais”) a informação relacionada a pessoa natural identificada ou identificável. Sendo que o tratamento (doravante denominado “Tratamento”) é toda a operação realizada com Dados Pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.

Ao navegar neste Site ou fornecer Dados Pessoais para Ford, independente do canal de coleta e/ou compartilhamento, Você estará consentindo e conferindo, assim, sua livre e expressa concordância com os termos aqui estipulados. Por isso, recomendamos que Você leia atentamente esta Política. Caso não esteja de acordo com as disposições desta Política, pedimos para que Você não cadastre ou compartilhe seus Dados Pessoais e interrompa imediatamente o acesso, o uso deste Site e/ou contato com os canais Ford.

Alguns produtos e serviços da Ford (incluindo algumas aplicações da Ford para dispositivos móveis) têm as suas próprias políticas de privacidade, que descrevem mais detalhadamente como os seus Dados Pessoais são tratados naquele contexto específico.

Através do cadastro no nosso Site e/ou compartilhamento de dados em qualquer outro canal de coleta da Ford, Você também poderá optar por receber mensagens, e-mails, contatos via telefone, sms ou whatsapp sobre nossos produtos, serviços, publicidade, promoções, pesquisas e notícias sobre a Ford.

Quadro Sintético

Ressaltamos que a breve leitura dos seguintes quadros sintéticos não dispensa a leitura integral da nossa Política de Privacidade do Site.

Dados pessoais que coletamos e finalidades

Nós coletamos os seguintes tipos de Dados Pessoais para as respectivas finalidades. Para saber mais sobre os Dados Pessoais que coletamos confira a sessão na Política de Privacidade do Site.
      </p>
      <p>
        Consulte a política completa em:
        <a href="https://www.ford.com.br/politica-de-privacidade/" target="_blank">
          Política de Privacidade Ford
        </a>
      </p>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="fechar(false)" class="cancelar">Cancelar</button>
      <button mat-flat-button [disabled]="!podeAceitar" (click)="fechar(true)" class="aceitar">
        Aceito
      </button>
    </mat-dialog-actions>
  
    `,
  styles: [`
mat-dialog-actions {
  padding: 8px 24px; 
}
.aceitar {
  cursor: pointer;
  width: 6rem;
  background: linear-gradient(135deg, #0d47a1, #1976d2);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}


.aceitar:hover:not([disabled]) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(25, 118, 210, 0.4);
}


.aceitar:disabled {
  background: #c0c0c0; 
  color: #f5f5f5;
  box-shadow: none;
  cursor: not-allowed;
  transform: translateY(0); 
}
   .cancelar {
     cursor: pointer;
     width: 6rem;
     background: #ffffff;
     color: #0d47a1; 
     border: 2px solid #0d47a1;
     border-radius: 10px;
     font-weight: 600;
     font-size: 0.95rem;
     letter-spacing: 0.5px;
     transition: all 0.3s ease;
   }
   mat-dialog-content {
      color: #333333;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    mat-dialog-content a {
      color: #0c4da2;
      text-decoration: underline;
    }
    

  `]
})
export class ModalTermosComponent {
  podeAceitar = false;

  // Corrigido: maneira correta de criar um array para o *ngFor
  termosItems = Array(37).fill(0);

  constructor(
    private dialogRef: MatDialogRef<ModalTermosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onScroll(event: Event) {
    // Se o botão já foi habilitado, não há necessidade de verificar novamente
    if (this.podeAceitar) {
      return;
    }

    const el = event.target as HTMLElement;

    // A lógica de tolerância de 1px é mantida para segurança
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    if (atBottom) {
      console.log("Chegou ao final do scroll!"); // Log de depuração
      this.podeAceitar = true;
    }
  }

  fechar(aceitou: boolean) {
    this.dialogRef.close(aceitou);
  }
}
