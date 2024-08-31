import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie.interface';
import { error } from 'console';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  
  public movieData! : Movie;
  public image! :string ;
  private localUrl: string = 'https://image.tmdb.org/t/p/w200';
  public error : boolean = false;
  public mayorEdad: boolean = false;
  public overview! :string;
  constructor(private movieService: MovieService){}
  
  ngOnInit(): void {
    
  }

  searchMovie(){
    this.mayorEdad = false
    this.error = false;
    this.movieService.getRandomMovie()
    .subscribe({next:(data)=>{
      this.movieData = data;
      this.image =this.localUrl + data.poster_path;
      this.overview = data.overview;
      this.movieService.translateOverview(this.overview)
                              .subscribe({next:(resp)=>{
                                this.overview = resp.data.translations[0].translatedText
                              }});
    },
    error:(error)=>{
      this.error = true;      
    }})
  }
  mayor(){
    this.mayorEdad = true;
  }
}
