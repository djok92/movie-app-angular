import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MoviesComponent,
    SearchComponent,
    MovieInfoComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
