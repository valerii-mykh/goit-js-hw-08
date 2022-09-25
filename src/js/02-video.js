import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const PLAY_TIME_KEY = 'videoplayer-current-time';
const playerRef = document.querySelector('#vimeo-player');
const player = new Player(playerRef);
// const PLAY_TIME_KEY = "videoplayer-current-time";

function PlayTime(data) {
localStorage.setItem(PLAY_TIME_KEY, data);
 }

 player.on('timeupdate', throttle(PlayTime, 1000));
function initPage() {
 let loadedTime = localStorage.load(PLAY_TIME_KEY);
 if (loadedTime) {
    player.setCurrentTime(loadedTime);
 }
}
initPage();