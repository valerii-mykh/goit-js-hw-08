// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryRef = document.querySelector('.gallery');

const gallery = document.querySelector('.gallery');

const newGalleryItems = galleryItems.map((items) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            alt="${items.description}"
        />
    </a>
</div>`
).join("");

gallery.innerHTML = newGalleryItems;

const instance = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt"});
    instance.on('show.simplelightbox');