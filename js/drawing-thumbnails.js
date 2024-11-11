import {photoQuantitys} from './data.js';


const thumbnails = document.querySelector('#picture').content.querySelector('.picture');
const similarPicturesContainer = document.querySelector('.pictures');
const photoFragment = document.createDocumentFragment();
const usersPictures = photoQuantitys();

usersPictures.forEach(({url, description, likes, comments}) => {
  const photoElement = thumbnails.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  photoFragment.appendChild(photoElement);
});

similarPicturesContainer.appendChild(photoFragment);

export {similarPicturesContainer};
