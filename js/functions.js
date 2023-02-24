/*
Иван, добрый день! Подскажите, такой вариант первой функции будет верный? :
const getLengthCheck = (string, maxLength) => { (string.length <= maxLength) ? true : false};
Проверял в консоли Chrome и всегда возвращалось "undefined".
Работало только так: const getLengthCheck = (string, maxLength) => { (string.length <= maxLength) ? console.log(true) : console.log(false)};
*/
//Функция для проверки длины строки:
const getLengthCheck = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

//Функця для проверки, является ли строка палинтромом + случай, когда в строке встречаются пробелы:
const getpalindromCheck = (string) => {
  let newString = string.toLowerCase();
    newString = newString.replaceAll(' ', '');
  let mirrorString = '';
    for (i = newString.length - 1; i >= 0; i--) {
      mirrorString += newString[i];
    }
  if (newString === mirrorString) {
   return true;
  }
  return false;
}

/*
Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
+ случай, когда вместо строки приходит число:
*/
const getNumber = (data) => {
  const string = String(data);
  let newString = string.replace(/[^0-9]/g, '');
  if (newString.length == 0) {
    newString = NaN;
    return newString;
  }
  newString = Number(newString);
  return newString;
}

/*
Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.
*/

const getadress = (text, minLength, addcharacters) => {
  if (text.length < minLength) {
    const quality = minLength - text.length;
    let characters = '';
    let j = 0;
    while (quality > addcharacters.length + j) {
      characters += addcharacters[0];
      j++;
    }
    for (let i = 0; i < quality - j; i++) {
      characters += addcharacters[i];
    }
    const result = characters + text;
    return result;
  }
  return text;
}
