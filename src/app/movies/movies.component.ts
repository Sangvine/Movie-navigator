import { MovieService } from './../movie.service';
import { switchMap } from 'rxjs/operators';
import { SharedService } from './../shared.service';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../models/mosk-movies';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  private searchTerms = new BehaviorSubject<string>('');
  isSearching: boolean;

  searchMovies(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      switchMap((term: string) => this.movieService.searchMovies(term))
    );
    this._sharedService.messageSource.subscribe((term: string) => {
      this.searchMovies(term);
      this.isSearching = term.trim() ? false : true;
    });
  }

  constructor(
    private _sharedService: SharedService,
    private movieService: MovieService
  ) {}
}
