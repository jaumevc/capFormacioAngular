import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private httpClient = inject(HttpClient); // Assume this is initialized properly elsewhere

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {  
    // Lògica per carregar els gifs de tendència
    //return this.httpClient.get(`${environment.giphyApiUrl}/trending?api_key=${environment.apiKey}&limit=25`);
    this.httpClient.get<GiphyResponse>(`${environment.giphyApiUrl}/trending?api_key=${environment.apiKey}`,{
      params: {
        api_Key: environment.apiKey,
        limit: '25',
      }
    })
  }
}
