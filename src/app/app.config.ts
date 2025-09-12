import {ApplicationConfig} from "@angular/core";
import {provideHttpClient, withJsonpSupport} from "@angular/common/http";
import {provideTranslateService} from "@ngx-translate/core";

import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideFirestore } from "@angular/fire/firestore";
import { getFirestore } from "firebase/firestore";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withJsonpSupport()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    })
  ]
};