import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getUserDetails(id):Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${id}`);
  }
}
