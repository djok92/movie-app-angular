import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movieToShow: any;

  constructor(private moviesService: MoviesServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    //ovo mi dinamicki prati ID komponente na koju je kliknuto
    this.route.params.subscribe(params => {
      const id = params.id;
      this.movieToShow = this.moviesService.getMovieById(id);
    });
  }

}
