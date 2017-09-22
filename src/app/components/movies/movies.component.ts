import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularLists:Array<Object>;
  searchRes:Array<Object>;
  theatersLists:Array<Object>;
  constructor(private _movieservice: MovieService) {

    this._movieservice.searchRes.subscribe((data: any) => {
      this.searchRes = data.results;
      console.log('hey',this.searchRes);
      
    }
    );
    this._movieservice.getPopular().subscribe(res=>{
      console.log(res.results);
      this.popularLists =res.results;
      
    });
    this._movieservice.getinTheatres().subscribe(res=>{
      //console.log(res.results);
      this.theatersLists = res.results;
    });

   }

  ngOnInit() {

  }

}
