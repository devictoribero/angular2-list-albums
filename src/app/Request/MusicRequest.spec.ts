import MusicRequest from './MusicRequest';

describe('MusicRequest unit tests', () => {

  it('GIVEN a musicRequest with only artistId THEN the querystring is well formatted', () => {
    const request = new MusicRequest(1);
    const suposedResult = 'id=1';
    expect(request.getQueryString()).toBe(suposedResult);
  });

  it('GIVEN a musicRequest with artistId and entityType THEN the querystring is well formatted', () => {
    const request = new MusicRequest(1, 'album');
    const suposedResult = 'id=1&entity=album';
    expect(request.getQueryString()).toBe(suposedResult);
  });

  it('GIVEN a musicRequest with artistId and query limit THEN the querystring is well formatted', () => {
    const request = new MusicRequest(1, null, 10);
    const suposedResult = 'id=1&limit=10';
    expect(request.getQueryString()).toBe(suposedResult);
  });

  it('GIVEN a musicRequest with artistId, entityType and queryLimit THEN the querystring is well formatted', () => {
    const request = new MusicRequest(1, 'album', 10);
    const suposedResult = 'id=1&entity=album&limit=10';
    expect(request.getQueryString()).toBe(suposedResult);
  });
});
