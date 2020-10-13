import { MovieFormComponent } from './movie-form/movie-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'add', component: MovieFormComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'edit/:id', component: MovieFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
