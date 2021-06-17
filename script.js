"use strict";


/*const NumberOfFilms = prompt("Сколько фильмов вы посмотрели?"," ");
const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {

    },
    actors:{

    },
    genres:[],
    privat: false
};


for (let i = 0; i < 2;i++){
    const a = prompt("Какой твой последний фильм?", ""),
          b = prompt("На сколько баллов ты его оценишь?", "");
          if (a.length == 0 || a.length > 50 || a == null ){
            alert("Учтите, что длина поля не должна быть больше 50 символов, меньше одного или вообще иметь пустую строку");
            i--;                                                /*Можно сказать заставляет нас заново отвечать на тот же самый вопрос
                                                                За счёт того, что мы "отклоняем" шаг в цикле*//*  
          } else {
              PersonalMovieDB.movies[a] = b;
              console.log(PersonalMovieDB.movies);
          }
        }


if ((PersonalMovieDB.count) <= 10){
    alert("Как-то мало фильмов вы смотрите!");
} else if ((PersonalMovieDB.count) > 10 && (PersonalMovieDB.count) <= 30){
    alert("Хочу заметить, что вы не безразличны к фильмам!");
} else {
    alert("Да вы самый настоящий киноман!");
}
/*         









