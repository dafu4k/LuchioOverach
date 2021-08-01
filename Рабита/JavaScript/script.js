"use strict";
const PersonalMovieDB = {
    count: 0,
    movies: {

    },
    actors:{

    },
    genres:[],
    privat: false,
    start: function () {                                                                   //В функциях не забывать ()!!!!
        PersonalMovieDB.count = prompt("Сколько фильмов вы посмотрели?"," ");
    
        while (PersonalMovieDB.count == null || PersonalMovieDB.count == " " || isNaN(PersonalMovieDB.count)) {
            PersonalMovieDB.count = prompt("Сколько фильмов вы посмотрели?"," ");
        }
        return PersonalMovieDB.count;  
    },
    detectPersonalLevel: function () {
        if ((PersonalMovieDB.count) <= 10){
            alert("Как-то мало фильмов вы смотрите!");
        } else if ((PersonalMovieDB.count) > 10 && (PersonalMovieDB.count) <= 30){
            alert("Хочу заметить, что вы не безразличны к фильмам!");
        } else {
            alert("Да вы самый настоящий киноман!");
        }
    },
    rememberMyFilms: function (){
        for (let i = 0, globalb2 = 0; i < 2;i++){
            const a = prompt("Какой твой последний фильм?", ""),
                  b = prompt("На сколько баллов ты его оценишь?", "");
                  if (a == null || a.length == 0 || a.length > 50){
                    alert("Учтите, что длина поля не должна быть больше 50 символов, меньше одного или вообще иметь пустую строку");
                    i--;
                    globalb2++;
                    if(globalb2 == 2){
                        console.log("Пасаси");
                        break;
                    }
                                                                    //Можно сказать заставляет нас заново отвечать на тот же самый вопрос
                                                                        //За счёт того, что мы "отклоняем" шаг в цикле 
                  } else {
                      PersonalMovieDB.movies[a] = b;
                  }
                }
    },
    writeYourGenres: function () {
        for (let i = 1; i != 4;i++){
            let a = prompt(`Ваш любимый жанр под номером ${i}`);
            if (a == 0 || a == null){
                i--;
            }
            PersonalMovieDB.genres[i] = a;
        }
            PersonalMovieDB.genres.forEach(function(first,second){
                console.log(`Любимый жанр #${second} - это ${first}`);
            });                                                                                     //Не забывать ")" в forEach перед ";"
        },
        
            
    toggleVisibleMyDB: function(){
        if(PersonalMovieDB.privat == false){
            PersonalMovieDB.privat = true;
        }else{
            PersonalMovieDB.privat = false;
        }
    },
    

};

PersonalMovieDB.start();
//PersonalMovieDB.rememberMyFilms();
//PersonalMovieDB.detectPersonalLevel();
//PersonalMovieDB.writeYourGenres();
//PersonalMovieDB.toggleVisibleMyDB();
console.log(PersonalMovieDB);




