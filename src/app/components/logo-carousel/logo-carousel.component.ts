import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-logo-carousel',
  imports: [
    NgFor,
    NgStyle
  ],
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.css'
})
export class LogoCarouselComponent implements OnInit { 
  @Input({ required: true }) slides: string[] = [];
  @Input() speed = 30;
  @Input() fallback = '/assets/fallback.png';

  trackStyle: any = {}

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = this.fallback;
  }

  ngOnInit(): void {
    const totalWidth = this.slides.length * 300;
    const duration = totalWidth / this.speed;
    this.trackStyle = {
      animation: `scroll ${duration}s linear infinite`
    }
  };
}
