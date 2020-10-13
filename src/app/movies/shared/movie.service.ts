import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'api/movies';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }

  searchMovies(term: string): Observable<Movie[]> {
    let query = term.trim() ? `?title=${term}` : '';
    return this.http
      .get<Movie[]>(`${this.moviesUrl}/${query}`)
      .pipe(catchError(this.handleError<Movie[]>('searchMovie', [])));
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: Number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http
      .get<Movie>(url)
      .pipe(catchError(this.handleError<Movie>('getMovie')));
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http
      .post<Movie>(this.moviesUrl, movie, this.httpOptions)
      .pipe(catchError(this.handleError<Movie>('addHero')));
  }

  deleteMovie(movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;
    return this.http
      .delete<Movie>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Movie>('deleteMovie')));
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http
      .put(this.moviesUrl, movie, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateMovie')));
  }

  constructor(private http: HttpClient) {}
}
