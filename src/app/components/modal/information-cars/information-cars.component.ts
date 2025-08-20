import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-information-cars',
  standalone: true,
  imports: [
    NgIf,
    TranslateModule
  ],
  templateUrl: './information-cars.component.html',
  styleUrl: './information-cars.component.css'
})
export class InformationCarsComponent {
  @Input() isOpen = false;
  @Input() car: any = null;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
