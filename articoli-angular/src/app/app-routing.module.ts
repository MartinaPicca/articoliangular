import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoliComponent } from './articoli/articoli.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path:'articoli', component : ArticoliComponent},
  {path:'lista', component : ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
