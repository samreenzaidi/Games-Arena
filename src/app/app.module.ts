import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GamesModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
