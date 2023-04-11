
const bigPhoto = document.querySelector('.big-picture');
const body = document.querySelector('.body');
const commentCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeButton = document.querySelector('.big-picture__cancel  cancel');
const socialComments = document.querySelector('.social__comments');

const hideBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  commentCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  //document.removeEventListener('keydown', onDocumentKeydown);
  //closeButton.removeEventListener('click', onCloseButton);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPhoto();
  }
};

const onCloseButton = () => {
  hideBigPhoto();
};

const renderPhotoDetails = ({url, description, likes, comments}) => {
  bigPhoto.querySelector('.big-picture__img').src = url;
  bigPhoto.querySelector('.social__caption').textContent = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  document.querySelector('.comments-count').textContent = comments.length;
};

//сюда вставить рендер комментов
const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>';
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
};

const renderComments = (data) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  data.forEach(() => {
    fragment.append(createComment(data));
  });

  socialComments.append(fragment);
};

const showBigPhoto = (data) => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButton); // пока не понимаю где удалять эти обработчики..

  renderPhotoDetails(data);
  renderComments(data.comments);
};

export {showBigPhoto};
