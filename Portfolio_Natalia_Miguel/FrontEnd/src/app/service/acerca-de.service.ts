import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDeM } from '../model/acerca-de-m';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  private URL = 'http://localhost:8080/Acerca_de/';
  constructor(private http: HttpClient) {}

  public buscarAcercaDe(id: number): Observable<any> {
    return this.http.get<any>(this.URL + 'buscar/' + id);
  }

  public editAcercaDe(
    id: number,
    nombre: String,
    titulo: String,
    email: String,
    img: String,
    descrip: String
  ): Observable<AcercaDeM> {
    return this.http.put<AcercaDeM>(
      this.URL +
        `editar/${id}?nombre_apellido=${nombre}&titulo=${titulo}&email=${email}&descripcion=${descrip}&img_perfil=${img}`,
        AcercaDeM
    );
  }
}