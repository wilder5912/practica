import { Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http, Headers}  from "@angular/http";

@Injectable()
export class HeroeService {

    private ruta: string = 'http://127.0.0.1:8080/user/getHeroes';
    private header = new Headers({'content-type': 'application/json'});
    constructor(private http: Http){

    }

    /*getUserHttp():Promise<Heroe[]>{
     let rutaLogin: string = 'http://127.0.0.1:8080/user/UserData';
        return this.http.get(rutaLogin)
            .toPromise()
            .then(
                (response) => {
                    console.log(response);
                    let respuesta:any = response;
                    let heroes: Heroe[] = JSON.parse(respuesta._body);
                    return heroes;
                }

            ).catch()
    }*/




/*    getHeroe(id:number): Promise<Heroe>{
        return this.getHeroesRetardo().then(
            (heroes) => heroes.find(heroe => heroe.id === id));

    }*/
/*    getHeroesHttp():Promise<Heroe[]>{
        return this.http.get(this.ruta)
            .toPromise()
            .then(
                (response) => {
                    console.log(response);
                    let respuesta:any = response;
                    let heroes: Heroe[] = JSON.parse(respuesta._body);
                    return heroes;
                }

            ).catch()
    }*/
/*    insertarHeroeHttp(heroe: Heroe): Promise<any>{
        let ruta:string = 'http://127.0.0.1:8080/heroes/putHeroe';
        return  this.http.post(ruta, heroe, {headers: this.header})
            .toPromise().then(
                ()=> 'el heroe se ha guardado correctamente'

            ).catch()
    }*/
}
