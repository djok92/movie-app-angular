import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesServiceService } from '../services/movies-service.service'

@Injectable({
  providedIn: 'root'
})
export class MovieExistsGuard implements CanActivate {
  constructor(private moviesService: MoviesServiceService, private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = route.params.id;
    const movie = this.moviesService.getMovieById(id);
    if (movie !== null) {
      return true;
    } else {
      this.router.navigate(['/404'])
      return false;
    }
  } 

  
}
