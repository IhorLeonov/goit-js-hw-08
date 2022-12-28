// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBox = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', imagesMarkup);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', onImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
  </div>`;
    })
    .join('');
}

function stopLoadingImg(e) {
  e.preventDefault();
}

function summonSimpleLightbox() {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function onImageClick(e) {
  stopLoadingImg(e);

  if (e.target.nodeName === 'IMG') {
    summonSimpleLightbox();
  }
}
