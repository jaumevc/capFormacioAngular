import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {

    static mapToGif(giphyItem: GiphyItem): Gif{
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url,
        };
    }   

    static mapToGifArray(giphyItems: GiphyItem[]): Gif[]{
        return giphyItems.map(this.mapToGif);
    }
}
