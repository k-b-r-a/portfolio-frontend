import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
    // localhost:8080/
    // satisfactory-kyla-k-b-r-a.koyeb.app
    url = 'https:7/satisfactory-kyla-k-b-r-a.koyeb.app/api/imgs';
  
    constructor(private http: HttpClient) {}
    getImg(): Observable<any> {
      return this.http.get(this.url);
    }
    getUnImg(id: string): Observable<any> {
      return this.http.get(this.url + '/' + id);
    }
  }
  
  export interface Img{
    id: string;
    nombre: string;
    url: string;
  }
