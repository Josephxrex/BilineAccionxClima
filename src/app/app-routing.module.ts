import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { ArticlepageComponent } from './components/articlepage/articlepage.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: 'modal',component: GaleriaComponent},
  
  //RUTA LOS ARTICULOS
  {path:'',component:ArticlepageComponent,pathMatch:'full'},
  {
    path:'articulos/:variable',
    component:FullArticleComponent
  },
  {path:'**',redirectTo:'articlepage'},
  
  //RUTA PARA CONTACTO
  {path: 'contact',component: ContactoComponent},
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
