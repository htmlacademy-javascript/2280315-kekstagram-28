import {galery} from './miniatures.js';

const bigPhoto = document.querySelector('.big-picture');
const body = document.querySelector('.body');
const commentCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');


const hideBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  commentCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPhoto();
  }
};

const rendrPhotoDetails = ({url, description, likes}) => {
  bigPhoto.querySelector('.big-picture__img').src = url;
  bigPhoto.querySelector('.social__caption').textContent = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
};

const showBigPhoto = (data) => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  rendrPhotoDetails(data);
};

const renderBigPhoto = (photos) => {
  galery.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-photo-id]');
    if (!thumbnail) {
      return;
    }
    const photo = photos.find(
      (item) => item.id === +photoElement.dataset.photoId
    );
    showBigPhoto(photo);
  });
};
