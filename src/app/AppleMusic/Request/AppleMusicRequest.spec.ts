import AppleMusicRequest from './AppleMusicRequest';

describe('AppleMusicRequest unit tests', () => {
  let request: AppleMusicRequest;
  beforeEach(() => {
    request = new AppleMusicRequest(1, 'album', 10);
  });

  it('the querystring is well formatted', () => {
    const suposedResult = 'id=1&entity=album&limit=10';
    expect(request.getQueryString()).toBe(suposedResult);
  });
});
