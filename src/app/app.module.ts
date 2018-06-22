import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClientSignUpHeaderComponent } from './client-sign-up/client-sign-up-header/client-sign-up-header.component';
import { ClientSignUpContentComponent } from './client-sign-up-content/client-sign-up-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientSignUpHeaderComponent,
    ClientSignUpContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
