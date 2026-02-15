import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../../../gifs/services/gifs.service';
import { map } from 'rxjs';
import { GifList } from "@app/gifs/gif-list/gif-list";
import { GifListItem } from '@app/gifs/gif-list/gif-list-item/gif-list-item';

@Component({
  selector: 'app-gif-history',
  imports: [GifList],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistory {

  gifsService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['term'])
  ));

  gifsByTerm = computed(() => {
    return this.gifsService.getHistoryByTerm(this.query());
  });

}
