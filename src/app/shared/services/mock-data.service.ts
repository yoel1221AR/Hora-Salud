import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from '../moks/mock-data';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  // Método para obtener los datos simulados
  getMockData(): Observable<any[]> {
    return of(MOCK_DATA); // Devuelve los datos como un Observable
  }
}
