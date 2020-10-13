import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 0,
        title: 'Фильм 1',
        genre: 'Жанр 1',
        country: 'Страна 1',
        duration: '136',
        review:
          'Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв ',
        rating: 5,
      },
      {
        id: 1,
        title: 'Фильм 2',
        genre: 'Жанр 2',
        country: 'Страна 2',
        duration: '136',
        review: 'Отзыв на фильм',
        rating: 5,
      },
      {
        id: 2,
        title: 'Фильм 3',
        genre: 'Жанр 3',
        country: 'Страна 3',
        duration: '136',
        review: 'Отзыв на фильм',
        rating: 3,
      },
      {
        id: 3,
        title: 'Фильм 4',
        genre: 'Жанр 2',
        country: 'Страна 2',
        duration: '136',
        review: 'Отзыв на фильм',
        rating: 4,
      },
      {
        id: 4,
        title: 'Фильм 5',
        genre: 'Жанр 3',
        country: 'Страна 3',
        duration: '136',
        review: 'Отзыв на фильм',
        rating: 1,
      },
      {
        id: 5,
        title: 'Фильм 6',
        genre: 'Жанр 3',
        country: 'Страна 4',
        duration: '136',
        review: 'Отзыв на фильм',
        rating: 5,
      },
    ];
    return { movies };
  }
  genId(movies: Movie[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
