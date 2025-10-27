import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../helpers/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  login(user_web: string, password: string): Observable<any> {
    return this.http.post( this.config.url+"login", { user_web, password });
  }

}
