import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();

  search(term: string) {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.searchTerms
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((input) => this._sharedService.messageSource.next(input));
  }

  constructor(private _sharedService: SharedService) {}
}
