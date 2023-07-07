import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  const { preview, original, description } = item;

  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;
    openModal(largeImageUrl);
  }
}

function openModal(largeImageUrl) {
  const instance = basicLightbox.create(
    `<img src="${largeImageUrl}" alt="Large Image">`);
  instance.show();

  const closeOnEscape = (event) => {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeOnEscape);
    }
  };
  window.addEventListener('keydown', closeOnEscape);
}

