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