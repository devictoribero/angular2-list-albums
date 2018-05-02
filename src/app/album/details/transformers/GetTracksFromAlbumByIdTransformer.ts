import Album from '../../entity/Album';
import Artist from '../../../Artist/entity/Artist';
import Track from '../../../Track/Entity/Track';
import AlbumDetailsDTO from '../DTO/AlbumDetailsDTO';
import TransformerAbstractClass from '../../../Common/Transformer/CommonTransformer';


export default class GetTracksFromAlbumByIdTransformer extends TransformerAbstractClass {

  handle(responseFromAPI: any): AlbumDetailsDTO {

    const {
      artistId,
      artistLinkUrl,
      artistName,
      primaryGenreName
    } = responseFromAPI[0];

    const artist = new Artist(artistId, artistLinkUrl, artistName, primaryGenreName);

    const thumbnail = responseFromAPI[0].artworkUrl100;

    const tracks = responseFromAPI.filter(each => each.kind === 'song')
      .map(each => new Track(
        each.trackId,
        each.trackNumber,
        each.trackName,
        each.artistName,
        each.trackPrice,
        each.trackTimeMillis,
        each.trackViewUrl,
        )
      );

    return new AlbumDetailsDTO(artist, thumbnail, tracks);
  }
}

