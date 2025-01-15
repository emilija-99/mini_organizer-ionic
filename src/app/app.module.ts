import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodsComponent } from './moods/moods.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './service/storage.service';
import { Drivers } from '@ionic/storage';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MoodsComponent, 
    IonicStorageModule.forRoot({name: '__mydb',driverOrder:[cordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
