import {createPhotos, PHOTOS_COUNT} from './data.js';

const galery = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('picture');
const simularPhotos = createPhotos(PHOTOS_COUNT);

const simularPhotoList = document.createDocumentFragment();

simularPhotos.forEach(({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('..picture__comments').textContent = comments.length;
  simularPhotoList.appendChild(photoElement);
});

galery.appendChild(simularPhotoList);

























