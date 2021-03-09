import { TestBed } from '@angular/core/testing';

import { OmdbapiService } from './omdbapi-service.service';
import { Movies, MovieResult } from '../models';
import { of } from 'rxjs';

describe('OmdbapiServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: OmdbapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new OmdbapiService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected Movies', () => {
    const expectedMovies: Movies = {
      Search: [
        {
          Title: 'A Habbit of Breaking-up',
          Year: '2013',
          imdbID: 'tt3312698',
          Type: 'movie',
          Poster: 'N/A',
        },
      ],
      totalResults: '1',
      Response: 'True',
    };

    httpClientSpy.get.and.returnValue(of(expectedMovies));
    service
      .getMovies('habbit')
      .subscribe(
        (movies) => expect(movies).toEqual(expectedMovies, 'expected movies'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
