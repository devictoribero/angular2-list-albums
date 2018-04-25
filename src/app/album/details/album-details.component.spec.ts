import { TestBed, async } from '@angular/core/testing';
import { AlbumDetailsComponent } from './album-details.component';

describe('AlbumDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumDetailsComponent
      ],
    }).compileComponents();
  }));
  it('Should create the AlbumDetailsComponent', async(() => {
    const fixture = TestBed.createComponent(AlbumDetailsComponent);
    const albumsDetailComponent = fixture.debugElement.componentInstance;
    expect(albumsDetailComponent).toBeTruthy();
  }));
  it('Should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AlbumDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Album\'s track');
  }));
});
