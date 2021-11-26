import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { ArticlepageComponent } from './components/articlepage/articlepage.component';

const routes: Routes = [
  //RUTA TEMPORAL SOLO PARA OBESERVAR LOS ARTICULOS
  {path:'',component:ArticlepageComponent,pathMatch:'full'},
  {
    path:'articulos/:variable',
    component:FullArticleComponent
  },
  {path:'**',redirectTo:'articlepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
