import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AcercaDeM } from '../model/acerca-de-m';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  URL = 'http://localhost:8080/acercade/';

  constructor(private httpClient : HttpClient) {}

  public lista(): Observable<AcercaDeM[]>{
    return this.httpClient.get<AcercaDeM[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<AcercaDeM>{
    return this.httpClient.get<AcercaDeM>(this.URL + `detail/${id}`);
  }

  public save(acercade: AcercaDeM): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', acercade);
  }
  public update(id: number, acercade: AcercaDeM): Observable<any>{
      return this.httpClient.put<any>(this.URL + `update/${id}`, acercade);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  }