import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private httpClient = inject(HttpClient); // Assume this is initialized properly elsewhere
  trendingGifs = signal<Gif[]>([]); //inicialitzat com a array buit
  trendingGifLoading = signal<boolean>(true); //inicialitzat a true

  //searchHistory = signal<Record<string,Gif[]>>({}); //inicialitzat com a objecte buit
  searchHistory = signal<Record<string,Gif[]>>(this.loadGifsFromLocalStorage());
  //computed per obtenir les claus de l'historial de cerques, que seran els termes de cerca:
  searchedHistoryKeys = computed(() => Object.keys(this.searchHistory())); 


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

  searchGifs(query: string) : Observable<Gif[]> {
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
        tap(gifitems => {
          //guardar els gifs cercats a l'historial de cerques, associant-los al terme de cerca
          this.searchHistory.update(history => {
            return {
              ...history, // mantenim l'historial anterior
              [query.toLowerCase()]: gifitems
            }
          });
        })
      );
    // .subscribe((resposta) => {
    //   const gifs = GifMapper.mapToGifArray(resposta.data);
    //   console.log('Gifs cercats:', gifs);
    // });
  }

  getHistoryByTerm(term: string): Gif[] {
    //obtenim els gifs associats al terme de cerca, si no existeix el terme retornem un array buit
    return this.searchHistory()[term] || [];
  }

  saveGifsToLocalStorage = effect(() => {
    // Lògica per guardar les cerques i els gifs associats al local storage
    const history = this.searchHistory();
    localStorage.setItem('gifSearchHistory', JSON.stringify(history));
  });

  //Es necesari perque la cerca: searchHistory = signal<Record<string,Gif[]>>({});//inicialitzat com a objecte buit
  loadGifsFromLocalStorage() : Record<string, Gif[]> {
    // Lògica per carregar les cerques i els gifs associats des del local storage
    const historyString = localStorage.getItem('gifSearchHistory');
    if (historyString) {
      const history = JSON.parse(historyString);
      return history;
    }
    return {};
  } 

}
