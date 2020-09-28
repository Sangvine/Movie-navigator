import { MovieService } from './../movie.service';
import { Movie } from './../models/movie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  id: number;

  constructor(
    private movieSevice: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getMovie(): void {
    this.movieSevice
      .getMovie(this.id)
      .subscribe((movie) => (this.movie = movie));
  }

  editMovie(): void {
    this.router.navigate([`edit/${this.id}`]);
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getMovie();
  }
}
