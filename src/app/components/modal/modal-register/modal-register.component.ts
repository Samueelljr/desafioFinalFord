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
  msgErrorPassword = false;
  msgErrorEmail = false;
  visible = false;
  name = '';
  email = '';
  confEmail = '';
  password = '';
  confPassword = '';

  constructor(private authService: AuthService) {}

  open() { this.visible = true; }
  close() { this.visible = false; }

  register() {
    if(this.email !== this.confEmail) {
      this.msgErrorEmail = true;
      console.log("Os emails não conferem.");
      return
    }
    if(this.password !== this.confPassword) {
      this.msgErrorEmail = false;
      this.msgErrorPassword = true;
      console.log("As senhas não conferem.");
      return
    }

    this.authService.register(this.email, this.password)
      .then(() => {
        console.log("Registo efetuado com sucesso!");
        this.close();
      })
      .catch(err => {
        console.error("Erro ao registrar:", err.message)
      })
  }
 
}
