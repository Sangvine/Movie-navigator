import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../models/mosk-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies = MOVIES;
  constructor() {}

  ngOnInit(): void {}
}
