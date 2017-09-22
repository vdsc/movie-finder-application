import { Injectable, Output, EventEmitter } from '@angular/core';
import {Jsonp, Http} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class MovieService {
  public searchRes = new EventEmitter<any>();
  searchstr: string;
  apikey:string;
  result: Array<Object>;
  constructor(private _jsonp: Jsonp, private http:Http) { 
    this.apikey= '2cab9ffd48b7925aa6b653fda5a5dddc';
    console.log('movie service initialized..');
    
  }
  getPopular(){
    //end point to get the most popular movies, we need callback as we are using jsonp to bypass CORS
    return this._jsonp.get('http://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
    .map(res => res.json());
  }
  getinTheatres(){
    //end point to get the most popular movies, we need callback as we are using jsonp to bypass CORS
    return this._jsonp.get('http://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-15&primary_release_date.lte=2017-09-21&api_key='+this.apikey)
    .map(res => res.json())
    }

  searchMovies(searchstr:string){
    return this.http.get('http://api.themoviedb.org/3/search/movie?api_key='+this.apikey+'&query='+searchstr)
    .map(res =>  res.json()).subscribe(res=>{
      //console.log(res);
      this.searchRes.emit(res);
      
    });
  }

  getmovie(id: string){
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apikey)
    .map(res => res.json());
  }
  
}
