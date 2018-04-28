import AlbumListDTO from '../DTO/AlbumListDTO';
import Album from '../../entity/Album';
import Artist from '../../../Artist/entity/Artist';
import TransformerInterface from '../../../common/transformer/TransformerInterface';

export default class GetAlbumsByArtistIdTransformer implements TransformerInterface {

  handle(responseFromAPI: any): AlbumListDTO {

    const {artistId, artistLinkUrl, artistName, primaryGenreName} = responseFromAPI.results[0];

    const artist = new Artist(artistId, artistLinkUrl, artistName, primaryGenreName);

    const albums = responseFromAPI.results.filter(each => each.collectionType === 'Album')
      .map(each => new Album(
        each.amgArtistId,
        each.collectionName,
        each.artistName,
        each.artworkUrl60,
        each.collectionPrice,
        )
      );

    return new AlbumListDTO(artist, albums);
  }
}

