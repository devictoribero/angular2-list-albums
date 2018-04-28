import AlbumListDTO, {default as AlbumDetailsDTO} from '../DTO/AlbumDetailsDTO';
import Album from '../../entity/Album';
import Artist from '../../../Artist/entity/Artist';
import TransformerInterface from '../../../common/transformer/TransformerInterface';
import Track from '../../../track/entity/Track';

export default class GetTracksFromAlbumByIdTransformer implements TransformerInterface {

  handle(responseFromAPI: any): AlbumDetailsDTO {

    const {artistId, artistLinkUrl, artistName, primaryGenreName} = responseFromAPI.results[0];

    const artist = new Artist(artistId, artistLinkUrl, artistName, primaryGenreName);

    const albums = responseFromAPI.results.filter(each => each.collectionType === 'Album')
      .map(each => new Track(
        each.trackId,
        each.trackName,
        each.artistName,
        each.artworkUrl60,
        each.trackPrice,
        each.trackTimeMillis,
        )
      );

    return new AlbumListDTO(artist, albums);
  }
}

