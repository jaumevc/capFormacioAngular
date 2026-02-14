import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private httpClient = inject(HttpClient); // Assume this is initialized properly elsewhere
  trendingGifs = signal<Gif[]>([]);
  trendingGifLoading = signal<boolean>(true);

  constructor() { this.loadTrendingGifs();}

  loadTrendingGifs() {
    // Lògica per carregar els gifs de tendència
    //return this.httpClient.get(`${environment.giphyApiUrl}/trending?api_key=${environment.apiKey}&limit=25`);
    this.httpClient.get<GiphyResponse>(`${environment.giphyApiUrl}/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: '25',
      }
    }).subscribe((resposta) => {
      console.log('Resposta del servei de Gifs:', resposta);
      //podre anar obtenint les dades de la resposta pero lo millor serà mapejar la resposta amb un mapper
      //resposta.data[0].images.original.url; 
      const gifs = GifMapper.mapToGifArray(resposta.data);
      console.log('Gifs mapejats:', gifs);
      //coloquem els gifs mapejats a la senyal
      this.trendingGifs.set(gifs);
      this.trendingGifLoading.set(false);
    });
  }

  searchGifs(query: string) {
    // Lògica per cercar gifs per nom, descripció o tags
    return this.httpClient.get<GiphyResponse>(`${environment.giphyApiUrl}/search`, {
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: '25',
      }
      // usem els metodes de rxjs amb pipe 
      // aquest que permet encadenar funcionaments dels obsevables com per exemple tap, map, filter, etc...
      }).pipe(
        //el tap servei per disparar objectes secundaris com per exemple un console.log, 
        // sense modificar la resposta que es rep del servei
        // tap(resposta => console.log('Resposta amb tap: ', resposta)),
        // map(resposta => GifMapper.mapToGifArray(resposta.data)),
        map(({ data }) => data),
        map(giphyItems => GifMapper.mapToGifArray(giphyItems)),

        //TODO: historial de cerques, guardar les cerques anteriors en un array i mostrar-les a la UI
      )

    // .subscribe((resposta) => {
    //   const gifs = GifMapper.mapToGifArray(resposta.data);
    //   console.log('Gifs cercats:', gifs);
    // });
  }


}
