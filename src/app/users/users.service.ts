import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`);
  }
}
