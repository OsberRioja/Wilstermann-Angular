import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosicionesServiceService {
  private tablaUrl = 'assets/posiciones.json';

  constructor(private http: HttpClient) { }

  getDatosTabla(): Observable<any> {
    return this.http.get<any>(this.tablaUrl);
  }
}
