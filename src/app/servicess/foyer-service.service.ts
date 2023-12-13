import { Injectable } from '@angular/core';
import { Foyer } from '../models/Foyer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerServiceService {
  private baseUrl = 'http://localhost:8181/api/foyers';

  constructor(private http: HttpClient) {}

  findAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/findAllF`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.baseUrl}/addFoyer`, foyer);
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.baseUrl}/UpdateFoyer`, foyer);
  }

  deleteFoyer(foyer: Foyer): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteFoyer`, { body: foyer });
  }

  getFoyersByBloc(blocId: number): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/byBloc/${blocId}`);
  }

  ajoutFoyerEtBloc(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.baseUrl}/ajoutFoyerEtBloc`, foyer);
  }

 //  ajouterFoyerEtAffecteUniversite(foyer: Foyer, idUniversite: number): Observable<Foyer> {
 //    return this.http.post<Foyer>(`${this.baseUrl}/ajouterFoyerEtAffecteUniversite/${idUniversite}`, foyer);
 //  }

//  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): Observable<Universite> {
//    return this.http.post<Universite>(`${this.baseUrl}/affecterFoyerAUniversite/${idFoyer}/${nomUniversite}`, {});
 //  }

 //  desaffecterFoyerAUniversite(idUniversite: number): Observable<Universite> {
  //    return this.http.put<Universite>(`${this.baseUrl}/desaffecterFoyerAUniversite/${idUniversite}`, {});
 //  }

//   affecterBlocAFoyer(nomBloc: string, nomFoyer: string): Observable<Bloc> {
 //    const params = { nomBloc, nomFoyer };
//     return this.http.put<Bloc>(`${this.baseUrl}/affecterBlocAFoyer`, null, { params });
//   }

}
