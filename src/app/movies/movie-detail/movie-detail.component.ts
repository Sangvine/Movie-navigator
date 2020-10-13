import { MovieService } from './../shared/movie.service';
import { Movie } from './../shared/movie';
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

  editMovie(): void {
    this.router.navigate([`edit/${this.id}`]);
  }

  deleteMovie(movie): void {
    this.movieSevice.deleteMovie(movie).subscribe();
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSevice
      .getMovie(this.id)
      .subscribe((movie) => (this.movie = movie));
  }
}
