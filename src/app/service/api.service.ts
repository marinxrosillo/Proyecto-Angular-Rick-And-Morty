import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/character`).pipe(
      map((response: any) => response.results));
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/character/${id}`);
  }
}