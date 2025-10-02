import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  redirect(urlDestino: string): void {
    window.open(urlDestino, 'blank', 'noopener, noreferrer')
  }
}
