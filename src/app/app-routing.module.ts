import { EditFormComponent } from './edit-form/edit-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'add', component: AddFormComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'edit/:id', component: EditFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
