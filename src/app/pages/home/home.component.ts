import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { LogoCarouselComponent } from "../../components/logo-carousel/logo-carousel.component";
import { ExhibitionCarsComponent } from "../../components/exhibition-cars/exhibition-cars.component";
import { ServicosComponent } from "../../components/services/services.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LogoCarouselComponent, ExhibitionCarsComponent, ServicosComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    '/assets/images/ford1903.png',
    '/assets/images/ford1909.png',
    '/assets/images/ford1912.png',
    '/assets/images/ford1917.png',
    '/assets/images/ford1927.png',
    '/assets/images/ford1957.png',
    '/assets/images/ford1961.png',
    '/assets/images/ford1976.jpg',
    '/assets/images/ford2003.png',
  ];
}
