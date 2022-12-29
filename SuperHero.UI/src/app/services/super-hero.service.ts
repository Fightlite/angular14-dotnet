import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  url = 'SuperHero';

  constructor(
    private http: HttpClient,
  ) { }

  getSuperHeros(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }

  updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }

  deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`);
  }
}
