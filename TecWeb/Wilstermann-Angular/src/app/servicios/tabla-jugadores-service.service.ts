import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TablaJugadoresServiceService {
  
  private tablaUrl = 'assets/jugadores.json';
  private tablaFUrl='assets/jugadoras.json';

  constructor(private http: HttpClient) { }

  getDatosTabla(): Observable<any> {
    return this.http.get<any>(this.tablaUrl);
  }

  getDatosTablaF(): Observable<any> {
    return this.http.get<any>(this.tablaFUrl);
  }
}
