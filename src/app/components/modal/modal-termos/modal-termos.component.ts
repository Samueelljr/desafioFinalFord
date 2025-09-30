import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-termos',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './modal-termos.component.html',
  styleUrl: './modal-termos.component.css'
})
export class ModalTermosComponent {
  podeAceitar = false;
  

  constructor(
    private dialogRef: MatDialogRef<ModalTermosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onScroll(event: Event) {
    if (this.podeAceitar) {
      return;
    }

    const el = event.target as HTMLElement;

    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    if (atBottom) {
      this.podeAceitar = true;
    }
  }

  fechar(aceitou: boolean) {
    this.dialogRef.close(aceitou);
  }
}
