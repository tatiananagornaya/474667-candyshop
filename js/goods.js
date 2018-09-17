'use strict';

var name = {
  productName:
    ['Чесночные сливки',
      'Огуречный педант',
      'Молочная хрюша',
      'Грибной шейк',
      'Баклажановое безумие',
      'Паприколу итальяно',
      'Нинзя-удар васаби',
      'Горчичный вызов',
      'Кедровая липучка',
      'Корманный портвейн',
      'Чилийский задира',
      'Беконовый взрыв',
      'Арахис vs виноград',
      'Сельдерейная душа',
      'Початок в бутылке',
      'Чернющий мистер чеснок',
      'Раша федераша',
      'Кислая мина',
      'Кукурузное утро',
      'Икорный фуршет',
      'Новогоднее настроение',
      'С пивком потянет',
      'Мисс креветка',
      'Бесконечный взрыв',
      'Невинные винные',
      'Бельгийское пенное',
      'Острый язычок'],
  };

/*
с picture пока не могу понять, как зайти в папку img/cards.
как понимаю, нужно в папке посчитать все файлы и циклом собрать массив со значениями img/cards/имя-файл.jpg.
var imagePath = 'img/cards';
var imageIndex[0];
var getCardImage = function() {};
*/

var picture;
var amount = {
    productAmount: Math.round(Math.random() * 20)
  };

  var price = {
    productPrice: Math.random() * (1500 - 100) + 100
  };

  var weight = {
    productWeight: Math.random() * (300 - 30) + 30
  };

  var rating = {
    value: Math.round(Math.random() * (5 - 1) + 1),
    number: Math.round(Math.random() * (900 - 10) + 10,
  };

  var nutritionFacts = {
    contents: ['молоко','сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор свинца', 'ароматизатор дуба', 'идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид', 'вилларибо', 'виллабаджо'],
    sugar: true,
    energy: Math.round(Math.random() * (500 - 90) + 90,
  };

function getCardDescription (name, picture, amount, price, weight, rating, nutritionFacts){
  this.name,
  this.picture,
  this.amount,
  this.price,
  this.weight,
  this.rating,
  this.nutritionFacts
};

for (var i = 0; i < 27; i++) {
  var cardsArray;
  if (!cardsArray[0]) getCardDescription();
}

var catalogCards = document.querySelector('.catalog__cards');
var catalogCardsLoad = document.querySelector('.catalog__cards--load');
catalogCards.removeChild(catalogCardsLoad);

var catalogLoad = document.querySelector('.catalog__load');
catalogCards.replaceChild((textContext('visually-hidden'), catalogLoad);
