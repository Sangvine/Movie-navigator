import { MatDialogRef } from '@angular/material/dialog';
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
    private location: Location
  ) {}

  goBack() {
    this.router.navigate([`detail/${this.id}`]);
  }

  addMovie() {}

  ngOnInit(): void {
    this.movieForm = new FormGroup({
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
