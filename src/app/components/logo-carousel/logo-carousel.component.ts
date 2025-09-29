import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-logo-carousel',
  imports: [
    NgFor,
  ],
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.css',
  encapsulation: ViewEncapsulation.None
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
