import { MatDialog } from '@angular/material/dialog';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  movie: Movie;
  id: String;
  movieForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    public dialog: MatDialog
  ) {}

  goBack() {
    this.router.navigate([`detail/${this.id}`]);
  }

  addMovie() {}

  updateMovie() {}

  onSubmit(movieFormValue) {
    const controls = this.movieForm.controls;
    if (this.movieForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let movie: Movie = movieFormValue;
    if (this.id) this.movieService.updateMovie(movie).subscribe();
    else this.movieService.addMovie(movie).subscribe();

    this.dialog.closeAll();
  }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      genre: new FormControl(null),
      country: new FormControl(null),
      duration: new FormControl(null),
      rating: new FormControl(null, [Validators.required]),
      review: new FormControl(null),
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.movieService.getMovie(+this.id).subscribe((movie) =>
        this.movieForm.patchValue({
          id: movie.id,
          title: movie.title,
          genre: movie.genre,
          country: movie.country,
          duration: movie.duration,
          rating: movie.rating,
          review: movie.review,
        })
      );
    }
  }
}
