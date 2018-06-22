import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './client-sign-up/header/header.component';
import { ContainerComponent } from './client-sign-up/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientSignUpComponent,
    NavComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
