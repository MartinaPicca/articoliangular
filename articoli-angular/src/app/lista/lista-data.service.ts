import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Articoli } from "../models/liste";
@Injectable({
    providedIn: 'root'
})
export class ListaDataService{
    constructor(private httpClient:HttpClient) { }



  getNomeArticolo() {
    return this.httpClient.get<Articoli[]>(`http://localhost:8081/api/articoli/nomearticolo`);  
  }
}