// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const { log } = console;
const gallery = document.querySelector('.gallery');
let lightbox;

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    lightbox = new SimpleLightbox('.gallery .gallery__item', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.open();
  }
});
[...galleryItems].forEach(photo => {
  let galleryItem = document.createElement('a');

  galleryItem.classList.add('gallery__item');
  galleryItem.setAttribute('href', `${photo.original}`);
  
  galleryItem.insertAdjacentHTML(
    'afterbegin',
    `<img class="gallery__image" src="${photo.preview}" data-source="${photo.original}" alt="${photo.description}">`
  );

  gallery.appendChild(galleryItem);
});

console.log(galleryItems);
