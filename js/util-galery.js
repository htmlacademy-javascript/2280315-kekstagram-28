
const bigPhoto = document.querySelector('.big-picture');
const commentCounter = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
const closeButton = bigPhoto.querySelector('.cancel');
const socialComments = bigPhoto.querySelector('.social__comments');

const hideBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButton);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPhoto();
  }
}

function onCloseButton () {
  hideBigPhoto();
}

const renderPhotoDetails = ({url, description, likes, comments}) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.social__caption').textContent = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
  bigPhoto.querySelector('.comments-count').textContent = comments.length;
};

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>';
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.append(createComment(comment));
  });

  socialComments.append(fragment);
};

const showBigPhoto = (modal) => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButton); // пока не понимаю где удалять эти обработчики..

  renderPhotoDetails(modal);
  renderComments(modal.comments);
};

export {showBigPhoto};
