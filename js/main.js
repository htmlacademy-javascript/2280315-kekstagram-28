// Массив с описанием фото
const DESCRIPTION = ['Описание 1','Описание 2','Описание 3','Описание 4','Описание 5','Описание 6','Описание 7','Описание 8',
'Описание 9','Описание 10','Описание 11','Описание 12','Описание 13','Описание 14','Описание 15','Описание 16','Описание 17',
'Описание 18','Описание 19','Описание 20','Описание 21','Описание 22','Описание 23','Описание 24','Описание 25'];

// Массив с именами комментаторов
const NAMES_FOR_COMMENTS = ['Морти', 'Рик', 'Влада', 'Ника', 'Арагорн', 'Фродо'];

// Массив с текстами комментариев
const TEXT_FOR_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Генератор ID для комментариев с уникальным значением
const createRandomIdGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNum(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNum(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const createComment = () => ({
    id: getRandomNum(1, 1000),
    avatar: getRandomNum(1, 6), // 'img/avatar-' + getRandomNum(1, 6) + '.svg' по заданию не понял какой вариант верный
    message: TEXT_FOR_COMMENTS[getRandomNum(0, TEXT_FOR_COMMENTS.length -1)],
    name: NAMES_FOR_COMMENTS[getRandomNum(0, NAMES_FOR_COMMENTS.length -1)]
  });

// генератор случайного кол-ва комментариев под каждым фото
const commentsGenerator= () => {
  const COMMENTS_FOR_PHOTO = [];
    let i = 0;
    let numberOfComments = getRandomNum(1, 4);
    while (i < numberOfComments) {
      COMMENTS_FOR_PHOTO.push(createComment());
        i++
  }
        return COMMENTS_FOR_PHOTO;
}

// Генератор для я ID и Url
const createNumGenerator = () => {
  let lastGeneratedNum = 0;
  return function () {
    lastGeneratedNum += 1;
    return lastGeneratedNum;
  };
}
const generateId = createNumGenerator ();
const generateUrl = createNumGenerator ();
const generateDescription = createNumGenerator ();

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const createObject = () => ({
    id: generateId(),
    url: generateUrl(),  // 'photos/' + generateUrl() + '.jpg' по заданию не понял какой вариант верный
    description: DESCRIPTION[generateDescription() - 1],
    likes: getRandomNum(15, 200),
    comments: commentsGenerator()
  })

  const result = Array.from({length: 25}, createObject);

  console.log(result);

