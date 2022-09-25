// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gall = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items.map((item) => `<div class="gallery__item"> 
  <a class="gallery__link" href="${item.original}"> 
  <img class="gallery__image" 
  src="${item.preview}" 
  data-source="${item.original}" 
  alt="${item.description}" /> 
  </a> 
  </div>`).join('')
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

gall.innerHTML = addGalleryMarkup;
gall.addEventListener("click", onImageClick);
function onImageClick(evt) {
  // заборона відкривання картинки, браузером
  blockStandartAction(evt);

  if (evt.target.nodeName !== 'IMG'){
    return
  }
  
 var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

  gall.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        lightbox.close()     
    }
  })
}
function blockStandartAction(evt) {
  evt.preventDefault();
}


player.on('timeupdate', function(data) {
  console.log(data.seconds)
localstorage.setItem()
});
player.setCurrentTime(30.456)







import Player from '@vimeo/player';


// import VimeoPlayer from '@vimeo/player';
import throttle from "lodash.throttle";


const playerRef = document.querySelector('#vimeo-player');
const player = new Player(playerRef);
const PLAY_TIME_KEY = "videoplayer-current-time";
function savePlayTime(data) {
localStorage.save(PLAY_TIME_KEY, Math.floor(data.seconds));
 }

 player.on('timeupdate', throttle(savePlayTime, THROTTLE_DELAY));

 let loadedTime = localStorage.getItem(PLAY_TIME_KEY);
 if (loadedTime) {
    player.setCurrentTime(loadedTime);
 }
 initPage();