
import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modal/modal-register/modal-register.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TranslateModule,
    ModalLoginComponent,
    ModalRegisterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @ViewChild(ModalLoginComponent, {static: false}) modal!: ModalLoginComponent;

  ngAfterViewInit() {
    // Só para conferir que o ViewChild foi inicializado
    console.log('Modal:', this.modal);
  }

  openLogin() {
    if (this.modal) {
      this.modal.open();
      this.isOpen = false;
    } 
  }

  @ViewChild(ModalRegisterComponent, {static: false}) modalRegister!: ModalRegisterComponent;

  openRegister() {
    this.modalRegister.open();
    this.isOpen = false;
  }

  innerWidth = window.innerWidth;

  initBtnDropdown() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    })
  }

  isVisible(): boolean {
    return this.innerWidth > 568; // Mostra só se for maior que 568px
  }
}

