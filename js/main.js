const PHOTOS_COUNT = 25;
const AVATAR_COUNT = 6;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 1000;
const MIN_COMMENTS_COUNT = 1;
const MAX_COMMENTS_COUNT = 4;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

// Описания поправлю чуть позже
const DESCRIPTIONS = [
  'Описание 1',
  'Самая короткая дорога на пляж',
  'Описание 3',
  'Взял с собой на отдых личного фотографа!',
  'Оцените мои куоинарные способности! Звезда Мишлена не за горами)',
  'Какая прекрасная брусчатка!',
  'Сегодня на диете...',
  'Описание 8',
  'Описание 9',
  'Описание 10',
  'Отпуск прохолит удачно! Погода прекрасная!',
  'Решил побаловать себя и взял себе машинку... (в аренду на 2 дня)',
  'Вкуснятина!!!',
  'Уже пробовали новый рол Барсик?',
  'Описание 15',
  'Возвращатьься домой всегла грустно:(',
  'Описание 17',
  'Описание 18',
  'Лучшие домашние подкрадули!!!',
  'Описание 20',
  'Описание 21',
  'Описание 22',
  'Описание 23',
  'Описание 24',
  'Описание 25'
];

// Массив с именами комментаторов
const NAMES_OF_COMMENTATORS = ['Морти', 'Рик', 'Влада', 'Ника', 'Арагорн', 'Фродо'];

// Массив с текстами комментариев
const COMMENT_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
// Генератор для я ID и Url
const createNumberGenerator = () => {
  let lastGeneratedNumber = 0;
  return () => ++lastGeneratedNumber;
  };

const generateId = createNumberGenerator ();
const generateUrl = createNumberGenerator ();
const generateDescription = createNumberGenerator ();

const getRandomNumber = (min, max) => {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генератор ID для комментариев с уникальным значением
const createRandomIdGenerator = (min, max) => {
    const previousValues = [];
  return () => {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const createComment = () => ({
    id: createRandomIdGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID),
    avatar: `img/avatar-${getRandomNumber(1, AVATAR_COUNT)}.svg`,
    message: COMMENT_TEXTS[getRandomNumber(0, COMMENT_TEXTS.length -1)],
    name: NAMES_OF_COMMENTATORS[getRandomNumber(0, NAMES_OF_COMMENTATORS.length -1)]
  });

const createComments = (length) => {
  return Array.from({length}, createComment());
}
//const comments = createComments(getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)); ???

  const createPhoto = () => ({
    id: generateId(),
    url: `photos/{generateUrl}.jpg`,
    likes: getRandomNumber(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: createComments(getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT))
  })

  const createPhotos = (length) => Array.from({length}, createPhoto);
