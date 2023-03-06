import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markupImages = crateImageCardsMarkup(galleryItems);



function crateImageCardsMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
      })
      .join('');
  };
  galleryContainer.insertAdjacentHTML('beforeend', markupImages);

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
   });