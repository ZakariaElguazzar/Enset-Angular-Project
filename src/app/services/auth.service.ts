import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users'; // JSON Server URL

  constructor(private http: HttpClient) {}

  // Register New User
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Login User
  loginUser(login: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?login=${login}&password=${password}`);
  }
}

