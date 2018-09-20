'use strict';

var NAME = ['Чесночные сливки',
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
      'Острый язычок'];

var PICTURE = ['img/cards/gum-cedar.jpg', 'img/cards/gum-chile.jpg', 'img/cards/gum-eggplant.jpg', 'img/cards/gum-mustard.jpg', 'img/cards/gum-portwine.jpg', 'img/cards/gum-wasabi.jpg', 'img/cards/ice-cucumber.jpg', 'img/cards/ice-eggplant.jpg', 'img/cards/ice-garlic.jpg', 'img/cards/ice-italian.jpg', 'img/cards/ice-mushroom.jpg', 'img/cards/ice-pig.jpg', 'img/cards/marmalade-beer.jpg', 'img/cards/marmalade-caviar.jpg', 'img/cards/marmalade-corn.jpg', 'img/cards/marmalade-new-year.jpg', 'img/cards/marmalade-sour.jpg', 'img/cards/marshmallow-bacon.jpg', 'img/cards/marshmallow-beer.jpg', 'img/cards/marshmallow-shrimp.jpg', 'img/cards/marshmallow-spicy.jpg', 'img/cards/marshmallow-wine.jpg', 'img/cards/soda-bacon.jpg', 'img/cards/soda-celery.jpg', 'img/cards/soda-cob.jpg', 'img/cards/soda-garlic.jpg', 'img/cards/soda-peanut-grapes.jpg', 'img/cards/soda-russian.jpg'];
var AMOUNT = [];
var PRICE = [];
var WEIGHT = [];
var RATING = {
    value: [],
    number: [],
  };
var NUTRITION_FACTS = {
    sugar: [true, false],
    energy: [],
    contents: ['молоко','сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор свинца', 'ароматизатор дуба', 'идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид', 'вилларибо', 'виллабаджо'],
  };

var getRandomElement = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createProductCard = function () {
  return {
    name: getRandomElement(NAME),
    picture: getRandomElement(PICTURE),
    amount: getRandomNumber(0, 20),
    price: getRandomNumber(100, 1500),
    weight: getRandomNumber(30, 300),
    rating: {
      value: getRandomNumber(1, 5),
      number: getRandomNumber(10, 900),
    },
    nutritionFacts: {
      sugar: getRandomElement(NUTRITION_FACTS.sugar),
      energy: getRandomNumber(70, 500),
      contents: getRandomElement(NUTRITION_FACTS.contents),
    }
  }
};

var productCardsArray = [];
for (var i = 0; i < 27; i++) {
  var product = createProductCard();
  productCardsArray.push(product);
}

var catalogCards = document.querySelector('.catalog__cards');
catalogCards.classList.remove('catalog__cards--load');
catalogCards.querySelector('.catalog__load').classList.add('visually-hidden');

var templateCatalogCard = document.querySelector('template#card')
    .content
    .querySelector('.catalog__card');
var getCatalogCard = function (product) {
	var template = templateCatalogCard.cloneNode(true);
	var amountClass;
	if (product.amount === 0) {
		amountClass = 'card--soon';
	} else if ( product.amount >= 1 && product.amount <= 5) {
		amountClass = 'card--little';
	} else { 
		amountClass = 'card--in-stock';
	}
	template.classList.add(amountClass);
	return template;
};

var catalogCardsArray = [];
for (var i = 0; i < productCardsArray.length; i++) {
  catalogCardsArray.push(getCatalogCard(productCardsArray[i]));
}

var cardTitle = templateCatalogCard.querySelector('.card__title');
cardTitle.textContent = product.name;

var cardPrice = templateCatalogCard.querySelector('.card__price');
cardPrice.innerHTML = product.price + '<span class="card__currency">₽</span><span class="card__weight">/' + product.weight +  'Г</span>';

var starsRating = templateCatalogCard.querySelector('.stars__rating ');
var getStarsRating = function (product) {
  var starsRatingClass;
  if (product.rating.value === 1) {
    starsRatingClass = 'stars__rating--one';
  } else if (product.value === 2) {
    starsRatingClass = 'stars__rating--two';
  } else if (product.rating.value === 3) {
    starsRatingClass = 'stars__rating--three';
  } else if (product.rating.value === 4) {
    starsRatingClass = 'stars__rating--four';
  } else {product.rating.value = 'stars__rating--five';
  }
  return starsRatingClass;
};

starsRating.classList.add(getStarsRating(product));

var starCount = templateCatalogCard.querySelector('.star__count ');
starCount.innerHTML = product.rating.number;

var cardCharacteristic = templateCatalogCard.querySelector('.card__characteristic');
var getNutritionFacts = function (product) {
  var sugarContent;
  product.nutritionFacts.sugar ? sugarContent = 'Содержит сахар' : sugarContent = 'Без сахара';
  return sugarContent
};
cardCharacteristic.textContent = getNutritionFacts(product);

var cardCompositionList = templateCatalogCard.querySelector('.card__composition-list');
var getRandomContents = function (product) {
  var contentsArray = [];
  for (var j = 0; j < 5; j++) {
    var productContents = getRandomElement(NUTRITION_FACTS.contents);
    contentsArray.push(productContents);
  }
  return contentsArray;
};
cardCompositionList.textContent = getRandomContents(product);


var templateGoodsCard = document.querySelector('template#card-order')
  .content
  .querySelector('.goods_card');

var getOrderedGoods = function (product) {
  var templateCardOrder = templateGoodsCard.cloneNode(true);
  var basket = [];
  for (var i = 0; i < 4; i++) {
    var product = createProductCard();
    productCardsArray.push(product);
  }
  templateCardOrder.textContent = basket;
  return templateCardOrder;
};

var goodsCards = document.querySelector('.goods__cards');
goodsCards.classList.remove('goods__cards--empty');
goodsCards.querySelector('.goods__card-empty').classList.add('visually-hidden');
