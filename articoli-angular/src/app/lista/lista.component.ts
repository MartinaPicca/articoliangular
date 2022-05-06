import { Component, OnInit } from "@angular/core";
//import { Articoli } from "../models/articoli";
import { Articoli } from "../models/liste";
import { ListaDataService } from "./lista-data.service";

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
    
    liste: Articoli[] = [];

    constructor(private articoliService: ListaDataService) {}

    ngOnInit(): void {
        this.articoliService.getNomeArticolo().subscribe(
          response => {
            console.log('test');
            this.liste = response;
            console.log(this.liste.length);
           
          },
          error => {
            console.log(error);
          }
        )
      }
}