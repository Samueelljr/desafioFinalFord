import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';
import { ModalTermosComponent } from '../modal-termos/modal-termos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-register',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal-register.component.html',
  styleUrl: './modal-register.component.css'
})
export class ModalRegisterComponent {
  name = '';
  msgErrorPassword = false;
  msgErrorEmail = false;
  visible = false;
  email = '';
  confEmail = '';
  password = '';
  confPassword = '';
  activeTermos = false;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openModalTermos() {
    const dialogRef = this.dialog.open(ModalTermosComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.activeTermos = result === true;
    })
  };

   validarRegister() {
    if (!this.activeTermos) {
      alert('Você deve aceitar os termos antes de prosseguir.');
      return;
    }
    // aqui segue o cadastro
  };


  open() { this.visible = true; }
  close() { this.visible = false; }

  validarEnvio(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.activeTermos = checkbox.checked;
  }
  
 async register() {
  if (!this.formValido) return;

  try {
    await this.authService.registerWithName(this.name, this.email, this.password);
    console.log('Registro efetuado com sucesso!');
    this.close();
  } catch (err: any) {
    let msg = 'Erro ao registrar. Tente novamente.';
    if (err?.code === 'auth/email-already-in-use') {
      msg = 'Este e-mail já está em uso. Tente outro ou faça login.';
    } else if (err?.code === 'auth/weak-password') {
      msg = 'A senha é muito fraca. Use pelo menos 6 caracteres.';
    } else if (err?.code === 'auth/invalid-email') {
      msg = 'E-mail inválido. Verifique e tente novamente.';
    }
    console.error(msg, err);
    this.snackBar.open(msg, 'Fechar', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-error']
    }) 
  }
}


/* ✅ Getter centralizado */
get formValido(): boolean {
  return (
    this.activeTermos &&
    this.name.trim().length > 0 &&
    this.email.trim().length > 0 &&
    this.confEmail.trim().length > 0 &&
    this.password.trim().length > 0 &&
    this.confPassword.trim().length > 0 &&
    this.email === this.confEmail &&
    this.password === this.confPassword
  );
}

  // async register() {
  //   if (this.email !== this.confEmail) { this.msgErrorEmail = true; return; }
  //   if (this.password !== this.confPassword) { this.msgErrorPassword = true; return; }
    
  //   try {
  //     await this.authService.registerWithName(this.name, this.email, this.password);
  //     console.log('Registro efetuado com sucesso!');
  //     this.close();
  //   } catch (err: any) {
  //     console.error('Erro ao registrar:', err?.message || err);
  //   }
  // }
}
 

