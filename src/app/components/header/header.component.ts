
import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TranslateModule,
    ModalLoginComponent
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
    } else {
      console.warn('Modal ainda não inicializado');
    }
  }
}
