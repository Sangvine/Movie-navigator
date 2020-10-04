import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from './../modal-window/modal-window.component';
import { MovieService } from './../movie.service';
import { switchMap } from 'rxjs/operators';
import { SharedService } from './../shared.service';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
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

  handleChange() {
    this.searchTerms.next('');
  }

  searchMovies(term: string) {
    this.searchTerms.next(term);
  }

  movieDetail(movie: Movie) {
    // const dialogRef = this.dialog.open(ModalWindowComponent, {
    //   data: {
    //     type: 'detail',
    //     title: movie.title,
    //     movieId: movie.id,
    //   },
    //   width: '30%',
    //   minWidth: '200px',
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.searchTerms.next('');
    //   //this.location.back();
    // });
    //
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
    public dialog: MatDialog,
    private _sharedService: SharedService,
    private movieService: MovieService,
    public router: Router,
    private location: Location
  ) {}
}
