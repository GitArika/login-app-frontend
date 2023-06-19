import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  private baseUrl = environment.apiUrl;

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }
}
