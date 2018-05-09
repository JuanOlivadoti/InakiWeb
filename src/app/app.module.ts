import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';


import { AppComponent } from './app.component';
import { InakiNavbarComponent } from './inaki-navbar/inaki-navbar.component';
import { InakiLogoComponent } from './inaki-logo/inaki-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    InakiNavbarComponent,
    InakiLogoComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
