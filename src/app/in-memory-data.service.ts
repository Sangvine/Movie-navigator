import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        title: 'Фильм 1',
        genre: 'Жанр 1',
        country: 'Страна 1',
        duration: '174',
      },
      {
        title: 'Фильм 2',
        genre: 'Жанр 2',
        country: 'Страна 2',
        duration: '174',
      },
      {
        title: 'Фильм 3',
        genre: 'Жанр 3',
        country: 'Страна 3',
        duration: '174',
      },
      {
        title: 'Фильм 4',
        genre: 'Жанр 2',
        country: 'Страна 2',
        duration: '174',
      },
      {
        title: 'Фильм 5',
        genre: 'Жанр 3',
        country: 'Страна 3',
        duration: '174',
      },
      {
        title: 'Фильм 6',
        genre: 'Жанр 3',
        country: 'Страна 4',
        duration: '174',
      },
    ];
    return { movies };
  }

  constructor() {}
}
