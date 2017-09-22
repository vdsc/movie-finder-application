import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import {JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
