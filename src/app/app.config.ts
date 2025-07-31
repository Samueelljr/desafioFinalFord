import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),

    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: 'json',
    }),

    importProvidersFrom([
      TranslateModule.forRoot()
    ])
  ]
};