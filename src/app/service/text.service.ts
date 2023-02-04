import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  // localhost:8080/
  // satisfactory-kyla-k-b-r-a.koyeb.app
  url = 'https://satisfactory-kyla-k-b-r-a.koyeb.app/api/texts';

  constructor(private http: HttpClient) {}
  getText(): Observable<any> {
    return this.http.get(this.url);
  }
  getUnText(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
}

export interface Inicio {
  id: string;
  nombre: string;
  message: string;
}
