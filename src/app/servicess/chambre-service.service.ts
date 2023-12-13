import { Injectable } from '@angular/core';
import { Chambre } from '../models/Chambre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreServiceService{
  private baseUrl = 'http://localhost:8181/api/chambres';

  constructor(private http: HttpClient) {
    console.log('${this.baseUrl}')
  }

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/findAllC`);
  }

  addChambre(data: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.baseUrl}/addChambre`, data);
  }

  updateChambre(data: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.baseUrl}/updateChambre`, data);
  }

  deleteChambreById(id: any) {
    return this.http.delete(`${this.baseUrl}/deleteChamberById/${id}`);
  }

  deleteChambre(data: Chambre) {
    return this.http.delete(`${this.baseUrl}/deleteChambre`, { body: data });
  }

  findChambreByNumero(numeroChambre: any): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/findChambreByNumero/${numeroChambre}`);
  }

  findChambreByType(typeChambre: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/findChambreByType/${typeChambre}`);
  }

  searchChambresByBloc(idBloc: any): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/chambres/searchByBloc?idBloc=${idBloc}`);
  }

  getChambresParNomBloc(nomBloc: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/getChamberList/${nomBloc}`);
  }
  nbChambreParTypeEtBloc(type: string, idBloc: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/nbChambreParTypeEtBloc/${type}/${idBloc}`);
  }
}
