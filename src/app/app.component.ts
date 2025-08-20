import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "./components/header/header.component";
import { LogoCarouselComponent } from "./components/logo-carousel/logo-carousel.component";
import { ExhibitionCarsComponent } from "./components/exhibition-cars/exhibition-cars.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule, HeaderComponent, LogoCarouselComponent, ExhibitionCarsComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'translate';

  images = [
    '/assets/images/ford1903.jpg',
    '/assets/images/ford1909.jpg',
    '/assets/images/ford1912.jpg',
    '/assets/images/ford1917.jpg',
    '/assets/images/ford1927.jpg',
    '/assets/images/ford1957.jpg',
    '/assets/images/ford1961.jpg',
    '/assets/images/ford1976.jpg'
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setFallbackLang('pt');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|pt/) ? browserLang : 'pt');
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
  }
}