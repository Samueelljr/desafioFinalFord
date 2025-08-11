import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


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

  open() { this.visible = true; }
  close() { this.visible = false; }
  login() {
    console.log('Login:', this.email, this.password);
    this.close();
  }
}
