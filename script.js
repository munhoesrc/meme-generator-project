const inputText = document.getElementById('text-input');
const TextMeme = document.getElementById('meme-text');
const pictureInsert = document.getElementById('meme-insert');
const imageMeme = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const preview = document.getElementById('meme-image-container');
const memePreset1 = document.getElementById('meme-1');
const memePreset2 = document.getElementById('meme-2');
const memePreset3 = document.getElementById('meme-3');
const memePreset4 = document.getElementById('meme-4');

function getText() {
  TextMeme.innerText = inputText.value;
}

function getImage() {
  const linkImage = URL.createObjectURL(pictureInsert.files[0]);
  imageMeme.src = linkImage;
}

function swapBorder(event) {
  if (event.target === btnFire) {
    preview.style.border = '3px dashed rgb(255,0,0)';
  } else if (event.target === btnWater) {
    preview.style.border = '5px double rgb(0, 0, 255)';
  } else if (event.target === btnEarth) {
    preview.style.border = '6px groove rgb(0, 128, 0)';
  }
}

function getPreset(event) {
  if (event.target === memePreset1) {
    imageMeme.src = memePreset1.src;
  } else if (event.target === memePreset2) {
    imageMeme.src = memePreset2.src;
  } else if (event.target === memePreset3) {
    imageMeme.src = memePreset3.src;
  } else if (event.target === memePreset4) {
    imageMeme.src = memePreset4.src;
  }
}

inputText.addEventListener('keyup', getText);
pictureInsert.addEventListener('change', getImage);
btnFire.addEventListener('click', swapBorder);
btnWater.addEventListener('click', swapBorder);
btnEarth.addEventListener('click', swapBorder);
memePreset1.addEventListener('click', getPreset);
memePreset2.addEventListener('click', getPreset);
memePreset3.addEventListener('click', getPreset);
memePreset4.addEventListener('click', getPreset);
