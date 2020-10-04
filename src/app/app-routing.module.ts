import { MovieSearchComponent } from './movie-search/movie-search.component';
import { DialogEntryComponent } from './dialog-entry/dialog-entry.component';
import { MoviesComponent } from './movies/movies.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  // { path: 'add', component: AddFormComponent },
  // { path: 'detail/:id', component: MovieDetailComponent },
  // { path: 'edit/:id', component: AddFormComponent },
  {
    path: 'home',
    component: MoviesComponent,
    children: [
      {
        path: 'dialog',
        component: DialogEntryComponent,
        children: [{ path: 'detail/:id', component: MovieDetailComponent }],
      },
    ],
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
