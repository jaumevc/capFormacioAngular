import { Component, inject, signal } from '@angular/core';
import { GifList } from "@app/gifs/gif-list/gif-list";
import { Gif } from '@app/gifs/interfaces/gif.interface';
import { GifsService } from '@app/gifs/services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export default class SearchPage {

  //Injectem el nou serve de cewrca de gifs
  gifSearchService = inject(GifsService);

  //afegim els gifs resultat de la cerca:
  gifs = signal<Gif[]>([]);


  onSearch(term: string) {
    // console.log('Search term:', term);
    // Aquí puedes agregar la lógica para realizar la búsqueda de GIFs utilizando el término ingresado
    this.gifSearchService.searchGifs(term).subscribe((resposta) => {
      // console.log('Gifs cercats:', resposta);
      this.gifs.set(resposta);
    }); 
  }

  
}
