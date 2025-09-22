import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';

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

  constructor(private authService: AuthService) {}

  open() { this.visible = true; }
  close() { this.visible = false; }

  validarEnvio(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.activeTermos = checkbox.checked;
  }
  
  async register() {
    if (this.email !== this.confEmail) { this.msgErrorEmail = true; return; }
    if (this.password !== this.confPassword) { this.msgErrorPassword = true; return; }
    
    try {
      await this.authService.registerWithName(this.name, this.email, this.password);
      console.log('Registro efetuado com sucesso!');
      this.close();
    } catch (err: any) {
      console.error('Erro ao registrar:', err?.message || err);
    }
  }
}
 

