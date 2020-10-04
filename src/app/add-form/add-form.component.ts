import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MovieService } from './../movie.service';
import { Movie } from './../models/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  movie: Movie;
  id: String;
  movieForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
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
