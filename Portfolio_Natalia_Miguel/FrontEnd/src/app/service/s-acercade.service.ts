import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Acercade } from '../model/acercade';

@Injectable({
  providedIn: 'root'
})
export class SAcercadeService {
  URL = 'https://backendnm.onrender.com/acercade/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Acercade[]>{
    return this.httpClient.get<Acercade[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Acercade>{
    return this.httpClient.get<Acercade>(this.URL + `detail/${id}`);
  }

  public save(acercade: Acercade): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', acercade);
  }
  public update(id: number, acercade: Acercade): Observable<any>{
      return this.httpClient.put<any>(this.URL + `update/${id}`, acercade);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}