/*
  Иван, спасибо за подробные комментарии!
*/
//Функция для проверки длины строки:
const getLengthCheck = (string, maxLength) => string.length <= maxLength;

//Функця для проверки, является ли строка палинтромом + случай, когда в строке встречаются пробелы:
const isPalindrome = (string) => {
  const modifiedString = string.toLowerCase().replaceAll(' ', '');
  let mirrorString = '';
    for (let i = modifiedString.length - 1; i >= 0; i--) {
      mirrorString += modifiedString[i];
    }
  return modifiedString === mirrorString;
}

/*
Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их
в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
+ случай, когда вместо строки приходит число:
*/

const getNumber = (data) => parseInt(String(data).replace(/[^0-9]/g, ''), 10);

/*
Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.
*/

const getAdress = (text, minLength, addCharacters) => {
  if (text.length < minLength) {
    const quality = minLength - text.length;
    let characters = '';
    let j = 0;
    while (quality > addCharacters.length + j) {
      characters += addCharacters[0];
      j++;
    }
    for (let i = 0; i < quality - j; i++) {
      characters += addCharacters[i];
    }
    return characters + text;
  }
  return text;
}
