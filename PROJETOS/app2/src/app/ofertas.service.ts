import { Oferta } from "./shared/oferta.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {

    constructor(private http:Http){

    }    

    public getOfertas(): Promise<Oferta[]> {      
           return this.http.get(`${URL_API}/ofertas?categoria=diversao`)
            .toPromise()
            .then((res:any) => res.json())           
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
                    .toPromise()
                    .then((resposta: any) => resposta.json())
    }


    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas/${id}`)
                   .toPromise()
                   .then( (resposta: any ) =>  resposta.json() )     
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar/${id}`)
        .toPromise()
        .then((retorno: any) => {return retorno.json().descricao})
    }

    public getOndeFicaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica/${id}`)
        .toPromise()
        .then((retorno: any) => {return retorno.json().descricao})
    }
    
}