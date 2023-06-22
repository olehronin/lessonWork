const numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?', '');
const gfe = 4;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


var a = 11111111;

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько цените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько цените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);