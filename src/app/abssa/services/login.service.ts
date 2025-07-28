/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  loginPreAdmin(body: { ip: string; usuario: string }): Observable<any> {
   let URI = 'https://localhost/clientesabssawebapi/api/login/GetLoginUrl'
    return this.http.post(URI, body);
  }
  loginAdminAbssa (body: { password: string; user: string }): Observable<any> {
    let URI = 'https://soluciones-dev.abssa.com.ar/ABSSA_CLIENTE/GS/web/index.aspx'
    return this.http.post(URI, body);
  }
}
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginPreAdmin(body: { ip: string; usuario: string }): Observable<any> {
    let URI = 'https://localhost/clientesabssawebapi/api/login/GetLoginUrl';
    return this.http.post<{ token: string }>(URI, body).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Guarda el token
          console.log('Token guardado:', response.token); // Log para verificar el token
        }
      })
    );
  }

  loginAdminAbssa(body: { password: string; user: string }): Observable<any> {
    let URI = 'https://soluciones-dev.abssa.com.ar/ABSSA_CLIENTE/GS/web/index.aspx';
    return this.http.post<{ token: string }>(URI, body).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Guarda el token
          console.log('Token guardado:', response.token); // Log para verificar el token
        }
      })
    );
  }
}
