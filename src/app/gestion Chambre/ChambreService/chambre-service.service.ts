
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {Chambre} from "../../models/Chambre";



@Injectable({
  providedIn: 'root'
})
export class  ChambreService {
  baseUrl='http://localhost:8181/api/chambres';
  constructor(private http: HttpClient){
    console.log('${this.baseUrl}')
  }

  getChambre(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/findAllC`);
  }

  addChambre(data: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.baseUrl}/addChambre`, data);
  }

  deleteChambreById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteChamberById/${id}`);
  }

 /* updateChambre(chambre: Chambre): Observable<Chambre> {
    const url = `${this.baseUrl}/updateChambre`;
    return this.http.put<Chambre>(url, chambre);
  }*/
  /*  getChambreDetails(id: number): Observable<Chambre> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Chambre>(url);
  }*/

  getChambreById(id:number): Observable<Chambre>{
      const url = `${this.baseUrl}/getChambreById/${id}`;
      return this.http.get<Chambre>(url);
  }

  updateChambre(chambre: Chambre): Observable<Chambre> {
    const url = `${this.baseUrl}/updateChambreById/${chambre.idChambre}`;
    return this.http.put<Chambre>(url, chambre);
  }
  findChambreByNumero(numeroChambre: number): Observable<Chambre> {
    const url = `${this.baseUrl}/findChambreByNumero/${numeroChambre}`;
    return this.http.get<Chambre>(url);
  }


    deleteChambre(id: number): Observable<string> {
        const url = `${this.baseUrl}/deleteChamberById/${id}`;
        return this.http.delete(url, { responseType: 'text' });
    }


 /* getReservation(chambreId: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/reservations/chambre/${chambreId}`);
  }*/

  pourcentageChambreParTypeChambre() {
    return this.http.get('/pourcentageChambreParTypeChambre');
  }

  findChambreByType(typeChambre: string): Observable<Chambre[]> {
    const url = `/findChambreByType/${typeChambre}`;
    return this.http.get<Chambre[]>(url);
  }
}

