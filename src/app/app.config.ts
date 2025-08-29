import {ApplicationConfig} from "@angular/core";
import {provideHttpClient, withJsonpSupport} from "@angular/common/http";
import {provideTranslateService} from "@ngx-translate/core";

import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideHttpClient(withJsonpSupport()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    })
  ]
};