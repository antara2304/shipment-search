import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ShipmentTranslateHttpLoader } from './app.translation.loader';
import { SharedModule } from './shared/shared.module';
// import { LABEL_WhatDoYouWantToDO } from '../assets/i18n/en.json';

export function HttpLoaderFactory(http: HttpClient) {
  return new ShipmentTranslateHttpLoader(http, './assets/i18n/', '.json'); // Path to your translation files
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
