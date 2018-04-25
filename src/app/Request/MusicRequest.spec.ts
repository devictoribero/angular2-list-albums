import MusicRequest from './MusicRequest';

describe('MusicRequest unit tests', () => {
  let request: MusicRequest;
  beforeEach(() => {
    request = new MusicRequest(1, 'album', 10);
  });

  it('the querystring is well formatted', () => {
    const suposedResult = 'id=1&entity=album&limit=10';
    expect(request.getQueryString()).toBe(suposedResult);
  });
});
