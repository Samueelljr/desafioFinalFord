import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-modal-login',
  imports: [ 
    FormsModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  visible = false;
  email = '';
  password = '';

constructor(private authService: AuthService) {}

  open() { this.visible = true; }
  close() { this.visible = false; }
  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        console.log('Login efetuado com sucesso!');
        this.close();
      })
      .catch(err => {
        console.error(' Erro ao logar:', err.message);
      });
  }
  
}
