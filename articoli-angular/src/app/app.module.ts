import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoliDataService } from './articoli/articoli-data.service';
import { ArticoliComponent } from './articoli/articoli.component';
import { ListaDataService } from './lista/lista-data.service';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoliComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticoliDataService, ListaDataService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
