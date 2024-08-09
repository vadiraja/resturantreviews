import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideAuth, getAuth, connectAuthEmulator } from "@angular/fire/auth";
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from "@angular/fire/firestore";
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from "@angular/fire/functions";
import { provideMessaging, getMessaging } from "@angular/fire/messaging";
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from "@angular/fire/storage";
import { routes } from "./app.routes";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "tunturu-2b497",
        appId: "1:658070131735:web:c18a47ffb04e88cfbe3852",
        storageBucket: "tunturu-2b497.appspot.com",
        // locationId: "us-central",
        apiKey: "AIzaSyCFEfwZB9qGxlL8IhLZF_I2VU6UxQmg--U",
        authDomain: "tunturu-2b497.firebaseapp.com",
        messagingSenderId: "658070131735",
        measurementId: "G-796VSYSGH7",
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    // importProvidersFrom(
    //   provideFirebaseApp(() => initializeApp(environment.firebase)),
    //   provideFirestore(() => getFirestore()),
    //   provideAuth(() => getAuth()),
    //   provideFunctions(() => getFunctions()),
    //   provideStorage(() => getStorage()),
    //   provideMessaging(() => getMessaging()),
    // ),
  ],
};
