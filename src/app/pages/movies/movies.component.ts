import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [];
  
  constructor(private moviesService: MoviesServiceService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });

    this.moviesService.searchMovie('Seven').subscribe()
    
  }
}
