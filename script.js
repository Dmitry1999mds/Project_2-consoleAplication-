"use strict"

//  переписать приложение так, чтобы 
//все функции стали методом объекта PersonalMovieDB;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres:[],
  privat: false,

  start: function(){
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
  },

  remeberMyFilms: function(){
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
    
  },

  detectPersonalLevel: function(){
    if(personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if( personalMovieDB.count >= 30){
        console.log('Вы Киноман!');
    } else{
        console.log('Произошла ошибка!');
    }
  },

  showMyDB: function(hidden){
    if( !hidden ){
        console.log(personalMovieDB);
      }
  },

  writeYourGenres: function(){
    for ( let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

         if ( genre === "" || genre === null){
             console.log('Некорректные данные');
             i--;
         } else {
             personalMovieDB.genres[ i - 1] = genre;
         }
    }

     personalMovieDB.genres.forEach(function(item, index){
        console.log(`Любимый жанр ${index + 1} - это ${item} `);
    }); 

    
  },

  togglrVisibleMyDB: function(){
      if (personalMovieDB.privat){
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
      
  }
};
personalMovieDB.writeYourGenres(); 



