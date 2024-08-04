import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisniciFormComponent } from './korisnici-form/korisnici-form.component';
import { KorisniciModule } from './korisnici/korisnici.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, KorisniciModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
