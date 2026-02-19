import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifList } from "@app/gifs/gif-list/gif-list";
import { GifsService } from '@app/gifs/services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export default class TrendingPage {
 // imageUrls = signal(imageUrls);

  serveiGifs = inject(GifsService);

  //imageUrls = computed(() => this.serveiGifs.trendingGifs().map(gif => gif.url));

  scrollContainerRef = viewChild<ElementRef>('scrollContainer');

  onScroll(event: Event) {
    const scrollDiv= this.scrollContainerRef()?.nativeElement;
    // console.log("Usant scroll", event);
    console.log("scroll en div: ",scrollDiv);
  } 
}
