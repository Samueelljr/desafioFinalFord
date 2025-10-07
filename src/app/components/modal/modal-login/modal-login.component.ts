import { Component, EventEmitter, importProvidersFrom, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  msgError = false;
  visible = false;
  email = '';
  password = '';

constructor(private authService: AuthService,
  private router: Router
) {}

  open() { this.visible = true; }
  close() { this.visible = false; }
login() {
   sessionStorage.removeItem('isAdmin');
  // checagem do admin
  if (this.email === 'admin' && this.password === 'admin') {
    sessionStorage.setItem('isAdmin', 'true'); 
    this.router.navigate(['/dashboard']); // redireciona
    return;
  }

  // login normal via Firebase/AuthService
  this.authService.login(this.email, this.password)
    .then(() => {
      console.log('Login efetuado com sucesso!');
      this.close();
    })
    .catch(err => {
      this.msgError = true;
      console.error('Erro ao logar:', err.message);
    });
}

}
  
