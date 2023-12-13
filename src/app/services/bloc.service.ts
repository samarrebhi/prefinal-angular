// bloc.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';
import {Bloc} from "../models/Bloc";

@Injectable({
  providedIn: 'root',
})
export class BlocService {
  private baseUrl = 'http://localhost:8181/api/blocs'; // Include the API endpoint


  constructor(private http: HttpClient) {}

  getBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/findAll`);
  }

}

