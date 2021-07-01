"use strict";


/*let NumberOfFilms;

function start() {                                                                   //В функциях не забывать ()!!!!
    NumberOfFilms = +prompt("Сколько фильмов вы посмотрели?"," ");

    while (NumberOfFilms == null || NumberOfFilms == " " || isNaN(NumberOfFilms)) {
        NumberOfFilms = prompt("Сколько фильмов вы посмотрели?"," ");
    }
    return NumberOfFilms;
}
start();


const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {

    },
    actors:{

    },
    genres:[],
    privat: false
};


function rememberMyFilms(){
    for (let i = 0; i < 2;i++){
        const a = prompt("Какой твой последний фильм?", ""),
              b = prompt("На сколько баллов ты его оценишь?", "");
              if (a.length == 0 || a.length > 50 || a == null ){
                alert("Учтите, что длина поля не должна быть больше 50 символов, меньше одного или вообще иметь пустую строку");
                i--;                                                /*Можно сказать заставляет нас заново отвечать на тот же самый вопрос
                                                                    За счёт того, что мы "отклоняем" шаг в цикле*/  
             /* } else {
                  PersonalMovieDB.movies[a] = b;
                  console.log(PersonalMovieDB.movies);
              }
            }
}

rememberMyFilms();

function detectPersonalLevel() {
    if ((PersonalMovieDB.count) <= 10){
        alert("Как-то мало фильмов вы смотрите!");
    } else if ((PersonalMovieDB.count) > 10 && (PersonalMovieDB.count) <= 30){
        alert("Хочу заметить, что вы не безразличны к фильмам!");
    } else {
        alert("Да вы самый настоящий киноман!");
    }
}

detectPersonalLevel();


function showMyDB() {
    if (PersonalMovieDB.privat == false){
        console.log(PersonalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i != 4;i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        PersonalMovieDB.genres[i] = a;
    }
}

writeYourGenres();

console.log(PersonalMovieDB);
*/  


