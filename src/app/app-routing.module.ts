import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { MovieExistsGuard } from './guards/auth-guard.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'movie-info/:id', component: MovieInfoComponent, canActivate: [MovieExistsGuard]},
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/movies' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
