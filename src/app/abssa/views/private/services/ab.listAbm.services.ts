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
export class AbListAbmService {
  private currentSession: any;

  constructor(private http: HttpClient) {}


  getListAbm(): Observable<IOptionRequest[]> {
    const mockUrl = './../../../../../assets/moks/listAbm.json';
    return this.http.get<IOptionRequest[]>(mockUrl, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error al obtener listRequest:', error);
        return of([]);
      })
    );
  }
  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
  }
  private getToken(): string {
    if (!this.currentSession || !this.currentSession.token) {
      this.currentSession = { token: this.generateToken() };
    }
    return this.currentSession.token;
  }
  private generateToken(): string {
    // Simulación de generación de token, aquí deberías implementar la lógica real
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
  }

}
