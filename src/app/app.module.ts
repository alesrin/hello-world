import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD-8-udJdwoPgAkrDNdOewo8JJVB1SXHlU",
  authDomain: "fir-bestgroup.firebaseapp.com",
  projectId: "fir-bestgroup",
  storageBucket: "fir-bestgroup.firebasestorage.app",
  messagingSenderId: "606589372361",
  appId: "1:606589372361:web:42f7e27adf5bc9aee40a18"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, TemplatesModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
