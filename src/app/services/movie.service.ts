import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { Translate } from '../interfaces/translate.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl: string = 'https://api.themoviedb.org/3/movie/';
  private random! : string;
  private apiKey: string = '045eb3967d7e3e96bdc6e618813a497b';

  constructor(private http : HttpClient) { }

  getRandomMovie(){
    this.random = (Math.floor(Math.random() * 999999) + 1).toString();
   return  this.http.get<Movie>(`${this.apiUrl}${this.random}?api_key=${this.apiKey}`)
  }

  translateOverview(text: string){
    return this.http.post<Translate>(`https://translation.googleapis.com/language/translate/v2/?q=${text}&target=es&key=AIzaSyC0z_TL-2Ac91ftJ6Kb-jnnPXoq7gcK5-o`, {})
  }
}
