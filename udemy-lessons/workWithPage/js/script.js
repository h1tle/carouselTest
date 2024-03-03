/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img');
    const genre = document.querySelector('.promo__genre');
    const poster = document.querySelector('.promo__bg');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkBox = addForm.querySelector('[type="checkbox"]');
    addForm.addEventListener('submit',  (event) => {
        event.preventDefault()
    })
//1
    const removeAdv = () => {
        adv.forEach(item => {
            item.remove();
            const newFilm = addInput.value;
            const favourite = checkBox.checked;
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
        })
    }
//2
    genre.textContent = 'Драма';
//3
    poster.style.backgroundImage = 'url(img/bg.jpg)';
//4
    movieDB.movies.sort();
// a  = a + 1 -->  a += 1
// movieList.innerHTML = movieList.innerHTML + `<li>${i + 1}. ${film}</li>`;
    function createMovieList(films, parent)
    {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `<li>${i + 1}. ${film}</li>`;
        })
    }
    removeAdv();
    createMovieList(movieDB.movies, movieList);
})