import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OmdbapiService } from '../service';
import { Movies, MovieResult } from '../models';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.sass'],
  providers: [OmdbapiService],
})
export class InputBoxComponent implements OnInit {
  moviesSearchResult: Movies | null;
  searchValue: string | null;
  singleMovie: MovieResult | null;
  loading: boolean | null;

  @ViewChild('buscaMoviesForm', { static: true }) buscaMoviesForm:
    | NgForm
    | undefined;

  constructor(private omdbApiService: OmdbapiService) {
    this.moviesSearchResult = null;
    this.singleMovie = null;
    this.searchValue = null;
    this.loading = null;
  }

  ngOnInit() {}

  getMovies(): void {
    this.loading = false;
    if (this.searchValue != null) {
      this.omdbApiService.getMovies(this.searchValue).subscribe((results) => {
        console.log(results);
        this.moviesSearchResult = results;
      });

      this.getMovie();
    }
  }

  getMovie(): void {
    if (this.searchValue != null) {
      this.omdbApiService.getMovie(this.searchValue).subscribe((results) => {
        this.singleMovie = results;
        this.loading = true;
      });
    }
  }
}
