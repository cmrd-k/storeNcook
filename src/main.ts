import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({projectId:"food-db55a",appId:"1:8012585050:web:8935336957a0e637f96063",storageBucket:"food-db55a.appspot.com",apiKey:"AIzaSyCcocld9gsGUauT05D-fSZMaD-8D0kP_9k",authDomain:"food-db55a.firebaseapp.com",messagingSenderId:"8012585050",measurementId:"G-23107011T2"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage())),
  ],
});