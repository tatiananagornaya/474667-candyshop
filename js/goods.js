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
var AMOUNT_MIN = 0;
var AMOUNT_MAX = 20;
var PRICE = [];
var PRICE_MIN = 100;
var PRICE_MAX = 1500;
var WEIGHT = [];
var WEIGHT_MIN = 30;
var WEIGHT_MAX = 300;
var RATING = {
    value: [],
    number: [],
  };
var VALUE_MIN = 1;
var VALUE_MAX = 5;
var NUMBER_MIN = 10;
var NUMBER_MAX = 900;
var NUTRITION_FACTS = {
    sugar: [true, false],
    energy: [],
    contents: ['молоко','сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор свинца', 'ароматизатор дуба', 'идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид', 'вилларибо', 'виллабаджо'],
  };
var ENERGY_MIN = 70;
var ENERGY_MAX = 500;
var OBJECTS_MAX = 26;
var PRODUCT_CARDS_ARRAY = [];

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
    amount: getRandomNumber(AMOUNT_MIN, AMOUNT_MAX),
    price: getRandomNumber(PRICE_MIN, PRICE_MAX),
    weight: getRandomNumber(WEIGHT_MIN, WEIGHT_MAX),
    rating: {
      value: getRandomNumber(VALUE_MIN, VALUE_MAX),
      number: getRandomNumber(NUMBER_MIN, NUMBER_MAX),
    },
    nutritionFacts: {
      sugar: getRandomElement(NUTRITION_FACTS.sugar),
      energy: getRandomNumber(ENERGY_MIN, ENERGY_MAX),
      contents: getRandomElement(NUTRITION_FACTS.contents),
    }
  }
};

for (var i = 0; i < OBJECTS_MAX; i++) {
  PRODUCT_CARDS_ARRAY.push(createProductCard());
  }

var catalogCards = document.querySelector('.catalog__cards');
catalogCards.classList.remove('catalog__cards--load');
catalogCards.querySelector('.catalog__load').classList.add('visually-hidden');

var templateCatalogCard = document.querySelector('template#card')
    .content
    .querySelector('.catalog__card');
var getCatalogCard = function () {
	var template = templateCatalogCard.cloneNode(true);
	var amountClass;
	if (PRODUCT_CARDS_ARRAY.amount === 0) {
		amountClass = 'card--soon';
	} else if ( PRODUCT_CARDS_ARRAY.amount >= 1 && PRODUCT_CARDS_ARRAY.amount <= 5) {
		amountClass = 'card--little';
	} else { 
		amountClass = 'card--in-stock';
	}
	template.classList.add(amountClass);
	return template;
};

var getCatalogCardsArray = function () {
  var array = [];
  for (var i = 0; i < PRODUCT_CARDS_ARRAY.length; i++) {
    array.push(getCatalogCard(PRODUCT_CARDS_ARRAY[i]));
  }
  return array;
};

var catalogCardsArray = getCatalogCardsArray();

var cardTitle = templateCatalogCard.querySelector('.card__title');
cardTitle.textContent = PRODUCT_CARDS_ARRAY.name;

var cardPrice = templateCatalogCard.querySelector('.card__price');
cardPrice.innerHTML = PRODUCT_CARDS_ARRAY.price + '<span class="card__currency">₽</span><span class="card__weight">/' + PRODUCT_CARDS_ARRAY.weight +  'Г</span>';

var starsRating = templateCatalogCard.querySelector('.stars__rating');
var getStarsRating = function (product) {
  var starsRatingClass;
  if (product.rating.value === 1) {
    starsRatingClass = 'stars__rating--one';
  } else if (product.rating.value === 2) {
    starsRatingClass = 'stars__rating--two';
  } else if (product.rating.value === 3) {
    starsRatingClass = 'stars__rating--three';
  } else if (product.rating.value === 4) {
    starsRatingClass = 'stars__rating--four';
  } else {product.rating.value = 'stars__rating--five';
  }
  return starsRatingClass;
};
starsRating.classList.add(getStarsRating(PRODUCT_CARDS_ARRAY[i]));


var getStarsRatingArray = function () {
var array = [];
  for (var i = 0; i < 5; i++) {
    array.push(getStarsRating(catalogCardsArray[i]));
  }
  return array;
};

var starsRatingArray = getStarsRatingArray();

var starCount = templateCatalogCard.querySelector('.star__count');
starCount.innerHTML = PRODUCT_CARDS_ARRAY[i].rating.number;

var cardCharacteristic = templateCatalogCard.querySelector('.card__characteristic');
var getNutritionFacts = function (product) {
  var sugarContent;
  sugarContent = product.nutritionFacts.sugar ? 'Содержит сахар' : 'Без сахара';
  return sugarContent
};
cardCharacteristic.textContent = getNutritionFacts(PRODUCT_CARDS_ARRAY[i]);

var cardCompositionList = templateCatalogCard.querySelector('.card__composition-list');
var getRandomContents = function (product) {
  var contentsArray = [];
  for (var j = 0; j < 5; j++) {
    var productContents = getRandomElement(NUTRITION_FACTS.contents);
    contentsArray.push(productContents);
  }
  return contentsArray;
};
cardCompositionList.textContent = getRandomContents(PRODUCT_CARDS_ARRAY[i]);


var templateGoodsCard = document.querySelector('template#card-order')
  .content
  .querySelector('.goods_card');

var getOrderedGoods = function (product) {
  var templateCardOrder = templateGoodsCard.cloneNode(true);
  var basket = [];
  for (var i = 0; i < 4; i++) {
    PRODUCT_CARDS_ARRAY.push(createProductCard());
  }
  templateCardOrder.textContent = basket;
  return templateCardOrder;
};

var goodsCards = document.querySelector('.goods__cards');
goodsCards.classList.remove('goods__cards--empty');
goodsCards.querySelector('.goods__card-empty').classList.add('visually-hidden');
