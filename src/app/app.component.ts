import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SlideComponent } from "./components/slide/slide.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule, SlideComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'translate';

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