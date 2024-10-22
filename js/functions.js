// Функция для проверки длины строки.

function stringLength (string, length) {
  if (string.lenght <= length) {
    return true;
  }else {
    return false;
  }
}

// Строка короче 20 символов
stringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
stringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
stringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом.

function isPolindrom (string) {
  const updateString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = updateString.length - 1; i >= 0; i--) {
    newString += updateString[i];
  }
  if (newString === updateString) {
    return true;
  }else{
    return false;
  }
}

// Строка является палиндромом
isPolindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolindrom('ДовОд'); // true
// Это не палиндром
isPolindrom('Кекс'); //false
