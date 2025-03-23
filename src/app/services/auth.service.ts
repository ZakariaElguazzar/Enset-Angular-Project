import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users'; // Use correct JSON server port

  constructor(private http: HttpClient) {}

  // ✅ Login method
  login(credentials: { login: string; password: string }): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?login=${credentials.login}&password=${credentials.password}`);
  }

  // ✅ Register method
  register(user: { name: string; login: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  // ✅ Logout method
  logout(): void {
    localStorage.removeItem('user'); // Remove stored user data
    sessionStorage.clear(); // Clear session data
  }
}

