import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports de Galeria
import { GaleriaComponent } from './galeria/galeria.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlepageComponent } from './components/articlepage/articlepage.component';
import { FullArticleComponent } from './components/full-article/full-article.component';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlepageComponent,
    FullArticleComponent,
    NavbarComponent,

    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
