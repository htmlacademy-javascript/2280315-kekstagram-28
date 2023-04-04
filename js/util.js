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
};

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
};

export {generateId, generateUrl, generateDescription, getRandomNumber, createRandomIdGenerator};
