import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Movies, MovieResult } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OmdbapiService {
  private readonly BASE_URL =
    'http://www.omdbapi.com/?apikey=ea68db65&type=movie';

  constructor(private http: HttpClient) {}

  getMovies(movieTitle: string): Observable<Movies> {
    let params = `&s=${movieTitle}`;

    return this.http.get<Movies>(this.BASE_URL + params);
  }

  getMovie(movieTitle: string): Observable<MovieResult> {
    let params = `&t=${movieTitle}&plot=full`;

    return this.http.get<MovieResult>(this.BASE_URL + params);
  }
}
