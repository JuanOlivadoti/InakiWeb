import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InakiNavbarComponent } from './inaki-navbar/inaki-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    InakiNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
