import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  // http://localhost:8080/
  // https://satisfactory-kyla-k-b-r-a.koyeb.app/api/login
  url = 'https://satisfactory-kyla-k-b-r-a.koyeb.app/api/login';

  constructor(private http: HttpClient) { }

  loginUser(user: User):Observable<Object>{
  return this.http.post(this.url, user);
  }
}
