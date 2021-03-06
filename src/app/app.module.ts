import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {PageTopComponent} from "./page-top/page-top.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavBarComponent,
    PageTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
