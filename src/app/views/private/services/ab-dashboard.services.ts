import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAccessFavorite } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-accesFavorite';
import { IOptionRequest } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-optionRequest';
import { IOptionGestionar } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-optionGestionar';
import { IFileds } from 'src/app/abssa/interfaces/Igs-fileds';
import { ITraining } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-training';

@Injectable({
  providedIn: 'root'
})
export class AbDashboardService {
  private currentSession: any;

  constructor(private http: HttpClient) {}

  private generateToken(): string {
    // Simulación de generación de token, aquí deberías implementar la lógica real
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
  }

  private getToken(): string {
    if (!this.currentSession || !this.currentSession.token) {
      this.currentSession = { token: this.generateToken() };
    }
    return this.currentSession.token;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
  }

  getAccessFavorites(): Observable<IAccessFavorite[]> {
    const mockUrl = './../../../../../assets/moks/accessFavorites.json';
    return this.http.get<IAccessFavorite[]>(mockUrl, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error al obtener accessFavorites:', error);
        return of([]);
      })
    );
  }

  getFields(): Observable<IFileds[]> {
    const mockUrl = './../../../../../assets/moks/fields.json';
    return this.http.get<IFileds[]>(mockUrl, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error al obtener fields:', error);
        return of([]);
      })
    );
  }

  getListRequest(): Observable<IOptionRequest[]> {
    const mockUrl = './../../../../../assets/moks/listRequest.json';
    return this.http.get<IOptionRequest[]>(mockUrl, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error al obtener listRequest:', error);
        return of([]);
      })
    );
  }

  getListGestionar(): Observable<IOptionGestionar[]> {
    const mockUrl = './../../../../../assets/moks/listGestionar.json';
    return this.http.get<IOptionGestionar[]>(mockUrl, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error al obtener listGestionar:', error);
        return of([]);
      })
    );
  }
  getListTrainings(): Observable<ITraining[]> {
    const mockUrl = './../../../../../assets/moks/listTrainings.json';
    return this.http.get<ITraining[]>(mockUrl, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error al obtener listGestionar:', error);
        return of([]);
      })
    );
  }
}
