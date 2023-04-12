import { showBigPhoto } from './util-galery.js';

const galery = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (photos) => {
  const simularPhotoList = document.createDocumentFragment();

  photos.forEach(({url, likes, comments, id}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.dataset.photoId = id;
    simularPhotoList.appendChild(photoElement);
  });

  galery.appendChild(simularPhotoList);
};

const renderGalery = (photos) => {
  galery.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-photo-id]');
    if (!thumbnail) {
      return;
    }
    const photo = photos.find((item) => item.id === +thumbnail.dataset.photoId);

    showBigPhoto(photo);
  });

  renderPhotos(photos);
};


export {renderGalery, renderPhotos};
