import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MovieService} from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MovieService]
})
 


export class AppComponent {
  
  searchstr: string;
constructor(private _movieservice:MovieService){

}
  searchMovies(){
   //console.log(this.searchstr);
    this._movieservice.searchMovies(this.searchstr);
  }
}
