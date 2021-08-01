/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const advDiv = document.querySelector(".promo__adv");
const advImgs = advDiv.querySelectorAll("img");
advImgs.forEach(function (element){
    element.remove();
});

/*for (let i = 0; i < advImgs.length; i++){
    advImgs[i].remove();                            То же самое
}*/



//2
/*const newGanre = document.createElement("div");
newGanre.classList.add("promo__genre");
newGanre.innerHTML = "драма";                                   //Мой код*
const oldGenre = document.querySelector(".promo__genre");
oldGenre.replaceWith(newGanre);*/

document.querySelector(".promo__genre").innerHTML = "драма";

//3
document.querySelector(".promo__bg").style.cssText = "background: url(img/bg.jpg)";

//4
const newMovies = [...movieDB.movies.sort()];
newLi(newMovies);

function newLi(array){
    
    for (let i = 0; i < array.length; i++){
        const dlt = document.querySelector(".promo__interactive-item");
        dlt.remove();
        const newList = document.createElement("li");
        newList.classList.add("promo__interactive-item");
        document.querySelector(".promo__interactive-list").append(newList);
        newList.innerHTML = `${i + 1}   ${array[i]}`;
        const classDlt = document.createElement("div");
        classDlt.classList.add("delete");
        const parent = document.querySelector(".promo__interactive-list");
        const lis = parent.querySelectorAll("li");
        lis[i].append(classDlt);
    }
}

//5






