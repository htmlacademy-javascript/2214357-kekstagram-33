const DESCRIPTION = [
  'Замечательное фото',
  'Отличный ракурс',
  'Классная идея',
  'Красивое фото',
  'Это фото заслуживае отдельного внимания',
  'Можно сразу на обложку журнала',
  'у тебя определённо талант!!!'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Владимир',
  'Генадий',
  'Олег',
  'Виталий',
  'Максим',
  'Наталья',
  'Светлана',
  'Ольга',
  'Ева'
];

const PHOTO_QUANTITY = 25;

//Функция для получения Id

const createIndexGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

//Функция для получения случайного числа

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdPictures = createIndexGenerator();
const createIdComment = createIndexGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const createComments = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomArrayElement((1, 6), toString)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: NAME[getRandomInteger(0, NAME.length - 1)],
});

const createPhoto = () => ({
  id: createIdPictures(),
  url: `photos/${getRandomInteger((1, 25), toString)}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComments),
  likes: getRandomInteger(15, 200)
});

const photo = Array.from({length: PHOTO_QUANTITY}, createPhoto);


