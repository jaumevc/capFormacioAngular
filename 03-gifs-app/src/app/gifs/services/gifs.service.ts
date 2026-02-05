import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private httpClient = inject(HttpClient); // Assume this is initialized properly elsewhere

  trendingGifs= signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {  
    // Lògica per carregar els gifs de tendència
    //return this.httpClient.get(`${environment.giphyApiUrl}/trending?api_key=${environment.apiKey}&limit=25`);
    this.httpClient.get<GiphyResponse>(`${environment.giphyApiUrl}/trending`,{
      params: {
        api_key: environment.apiKey,
        limit: '25',
      }
    }).subscribe((resposta) =>{
      console.log('Resposta del servei de Gifs:', resposta);
      //podre anar obtenint les dades de la resposta pero lo millor serà mapejar la resposta amb un mapper
      //resposta.data[0].images.original.url; 

      const gifs = GifMapper.mapToGifArray(resposta.data);
      console.log('Gifs mapejats:', gifs);
      //coloquem els gifs mapejats a la senyal
      this.trendingGifs.set(gifs);
      
    });

  }
}
