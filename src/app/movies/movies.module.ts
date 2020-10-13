import { MovieDurationPipe } from './../ui/pipes/movie-duration.pipe';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { MovieAddCardComponent } from './movie-add-card/movie-add-card.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    MovieSearchComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieAddCardComponent,
    ModalWindowComponent,
    MovieFormComponent,
    MovieDetailComponent,
    MovieDurationPipe,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  exports: [MovieCardComponent, MovieSearchComponent, MoviesComponent],
})
export class MoviesModule {}
