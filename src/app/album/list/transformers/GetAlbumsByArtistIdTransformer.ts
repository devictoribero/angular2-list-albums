import AlbumListDTO from '../DTO/AlbumListDTO';
import Album from '../../entity/Album';
import Artist from '../../../Artist/entity/Artist';
import TransformerAbstractClass from '../../../Common/Transformer/CommonTransformer';

export default class GetAlbumsByArtistIdTransformer extends TransformerAbstractClass {

  handle(responseFromAPI: any): AlbumListDTO {

    const {
      artistId,
      artistLinkUrl,
      artistName,
      primaryGenreName
    } = responseFromAPI[0];

    const artist = new Artist(artistId, artistLinkUrl, artistName, primaryGenreName);

    const albums = responseFromAPI.filter(each => each.collectionType === 'Album')
      .map(each => new Album(
        each.amgArtistId,
        each.collectionName,
        each.artistName,
        each.artworkUrl100,
        each.trackCount,
        each.collectionPrice,
        each.currency
        )
      );

    return new AlbumListDTO(artist, albums);
  }
}

