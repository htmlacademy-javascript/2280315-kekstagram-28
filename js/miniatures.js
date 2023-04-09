

const galery = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPhotos = (photos) => {
  const simularPhotoList = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    simularPhotoList.appendChild(photoElement);
  });

  galery.appendChild(simularPhotoList);
};

export {renderPhotos};
