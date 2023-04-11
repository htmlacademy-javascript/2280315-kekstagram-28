
import {createPhotos, PHOTOS_COUNT} from './data.js';
import {renderPhotos, renderGalery} from './galery.js';

const photos = createPhotos(PHOTOS_COUNT);

renderPhotos(photos);
renderGalery(photos);
