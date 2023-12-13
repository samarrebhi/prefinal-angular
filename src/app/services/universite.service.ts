import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Foyer} from "../models/Foyer";
import {Universite} from "../models/Universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://localhost:8181/api/universites'; // Include the API endpoint


  constructor(private http: HttpClient) {}

  getUniversite(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/findAllU`);
  }
}
