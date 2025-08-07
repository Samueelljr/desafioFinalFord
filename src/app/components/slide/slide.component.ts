import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slide',
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideComponent {
  images = [
    'assets/images/img1.png',
    'assets/images/img2.png',
    'assets/images/img3.png',
    'assets/images/img2.png',
    'assets/images/img1.png',
    'assets/images/img3.png'
  ];
}
