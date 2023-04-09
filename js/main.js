
import {createPhotos, PHOTOS_COUNT} from './data.js';
import {renderPhotos} from './miniatures.js';

const photos = createPhotos(PHOTOS_COUNT);

renderPhotos(photos);
