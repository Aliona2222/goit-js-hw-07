import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  const { preview, original, description } = item;
  return `
  <li class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
  </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});








