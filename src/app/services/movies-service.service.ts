import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { movies } from '../mock/movies';
import { Movie } from '../classes/movie';
import { of, BehaviorSubject } from 'rxjs';

const API_KEY = '297675d9';
const ENDPOINT_URL = 'http://www.omdbapi.com/';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  
  private movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(movies);

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.movies$.asObservable();
  }

  getMovieById(id: string) {
    return this.movies$.value.find((movie: any) => movie.id === id) || null;
  }

  getMoviesApi() {
    const url = `http://www.omdbapi.com/?t=Seven&apikey=${API_KEY}`;
    return this.http.get(url);
  }

  searchMovie(term: string) {
    const theMovie = this.movies$.value.find(m => m.title.indexOf(term) > -1);
    if (theMovie) {
      return of(theMovie);
    } else {
      return this.http.get(`${ENDPOINT_URL}?t=${term}&apikey=${API_KEY}`)
      .pipe(
        map((res: any) => {
          const movie = new Movie({
            id: res.imdbID,
            title: res.Title,
            description: res.Plot,
            year: res.Year,
            img: res.Poster,
            actors: res.Actors.split(', '),
            director: res.Director,
            rating: res.imdbRating
          });
            
          this.movies$.next([movie, ...movies]);
          return movie;
        })
      )
    }
  }
}