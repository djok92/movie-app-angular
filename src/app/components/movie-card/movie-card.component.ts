import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  @Input() img;
  @Input() title;
  @Input() desc;
  @Input() actors;
  @Input() director;
  @Input() rating;
  @Input() id;

  @Input()
  showLink = true;

  constructor() { 

  }

  ngOnInit() {
  }

}
