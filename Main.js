window.addEventListener('load', init);

const levels = {
  easy: 9,
  medium: 6,
  hard: 4
};

const cul = levels.medium;

let time = cul;
let isplaying;
let score = 0;

const wordi = document.querySelector('#word-input');
const cw = document.querySelector('#current-word');

const sd = document.querySelector('#score');

const timed = document.querySelector('#time');

const mg = document.querySelector('#message');

const sec = document.querySelector('#seconds');

const words = ['hat',
  'whiet',
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'

];

function init() {
  sec.innerHTML = cul;
  showword(words);
  wordi.addEventListener('input', startmatch);
  setInterval(countdown, 1000);
  setInterval(status, 50);



}
function startmatch() {
  if (matchword()) {
    isplaying = true;
    time = cul+1;
    showword(words);
    wordi.value = '';
    score++;

  }


  if (score===-1) {
    sd.innerHTML = 0;
  } else {
    sd.innerHTML = score;
  }
}
function matchword() {
  if (wordi.value === cw.innerHTML) {
    mg.innerHTML = 'correct!!!!';
    return true;

  } else {
    mg.innerHTML = '';
    return false;
  }
}

function showword(words) {
  const ri = Math.floor(Math.random()*words.length);
  cw.innerHTML = words[ri];


}
function countdown() {
  if (time > 0) {
    time--;
  } else {
    isplaying = false;
  }
  timed.innerHTML = time;
}

function status() {
  if (!isplaying && time === 0) {
    mg.innerHTML = 'Game over';
    score=-1;
  }
}