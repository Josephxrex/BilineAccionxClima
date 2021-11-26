import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlepageComponent } from './components/articlepage/articlepage.component';
import { FullArticleComponent } from './components/full-article/full-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlepageComponent,
    FullArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
