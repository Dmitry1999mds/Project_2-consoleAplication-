"use strict"

//мое решение консольной задчи и спользование циклов и условий
/* const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

if (numberOfFilms == null || numberOfFilms.length > 5 || numberOfFilms == false){
    numberOfFilms = prompt(" уточните пожалйста, сколько фильмов вы уже посмотрели?", '');
 } 


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres:[],
  privat: false
}; 

if(personalMovieDB.count < 10){
  alert('Просмотренно довольно мало фильмов')
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
  alert('Вы классический зритель')
 } else if( personalMovieDB.count > 30){
    alert('Вы Киноман!')
  } else{
      alert('Произошла ошибка!')
    } */


/* const n = 2;
let a, b;

for( let i = 1; i <= n; i++){
   a = prompt('Один из последних просмотренных фильмов?');

   while(a == null || a.length > 10 || a == false){
      a = prompt('Ввели некорректный фильм, введите еще раз');
   }

   b = prompt('На сколько оцените его?');

   while(b == null || b.length > 10 || b == false){
      b = prompt('Не правельная оценка, введите еще раз');
  }

  personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
 */

//Решение консольной задачи с использование циклов и условий

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres:[],
  privat: false
};

for ( let i = 1; i <= 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оценил его?', '');
  
  if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
  } else {
      console.log('error');
      i--; 
  }
        
     
} 

console.log(personalMovieDB);