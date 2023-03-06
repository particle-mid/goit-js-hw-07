import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markupImages = crateImageCardsMarkup(galleryItems);



function crateImageCardsMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
      })
      .join('');
  };
  galleryContainer.insertAdjacentHTML('beforeend', markupImages);

  galleryContainer.addEventListener('click', handleGalleryClick);

  function handleGalleryClick(evt) {
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
        return
    };
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
  }
