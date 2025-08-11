import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-register',
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal-register.component.html',
  styleUrl: './modal-register.component.css'
})
export class ModalRegisterComponent {
  visible = false;
  email = '';
  password = '';

  open() { this.visible = true; }
  close() { this.visible = false; }
 
}
