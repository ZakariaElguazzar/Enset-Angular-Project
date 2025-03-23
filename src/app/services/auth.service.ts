import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users'; // Use correct JSON server port

  constructor(private http: HttpClient) {}

  // 🛠️ FIXED: Properly query for user authentication
  login(credentials: { login: string; password: string }): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?login=${credentials.login}&password=${credentials.password}`);
  }

  // 🛠️ FIXED: Correct request body for registration
  register(user: { name: string; login: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
