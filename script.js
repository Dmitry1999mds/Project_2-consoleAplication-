"use strict"

//мое решение консольной задчи и спользование функций!

/* let numberOfFilms;
 
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

  while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
  }

};

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres:[],
  privat: false
};


function remeberMyFilms(){
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
}

remeberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count < 10){
      console.log('Просмотренно довольно мало фильмов');
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log('Вы классический зритель');
  } else if( personalMovieDB.count >= 30){
      console.log('Вы Киноман!');
  } else{
      console.log('Произошла ошибка!');
  } 
}

detectPersonalLevel();



function showMyDB(){
  if( personalMovieDB.privat == false ){
    console.log(personalMovieDB);
  }
}

showMyDB();



function writeYourGenres(){
  for ( let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = confirm(`Ваш любимый жанр номером ${i}`);
  }
}

writeYourGenres(); */


//Решение консольной задачи с использование циклов и условий

let numberOfFilms;
 
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

  while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
  }

};

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres:[],
  privat: false
};


function remeberMyFilms(){
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
}

// remeberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count < 10){
      console.log('Просмотренно довольно мало фильмов');
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log('Вы классический зритель');
  } else if( personalMovieDB.count >= 30){
      console.log('Вы Киноман!');
  } else{
      console.log('Произошла ошибка!');
  } 
}

// detectPersonalLevel();



function showMyDB(hidden){
  if( !hidden ){
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);



function writeYourGenres(){
  for ( let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр номером ${i}`);
  }
}

writeYourGenres();
  