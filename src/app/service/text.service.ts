import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  // http://localhost:8080/
  // https://satisfactory-kyla-k-b-r-a.koyeb.app/api/texts
  url = 'https://satisfactory-kyla-k-b-r-a.koyeb.app/api/texts';

  constructor(private http: HttpClient) {}
  getText(): Observable<any> {
    return this.http.get(this.url);
  }
  getUnText(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
  editarText(id: string, inicio: Inicio): Observable<any> {
    return this.http.put(this.url + '/' + id, inicio);
  }
}

export interface Inicio {
  id: string;
  nombre: string;
  message: string;
}
