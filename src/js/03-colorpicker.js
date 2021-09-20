  
import colorCardTpl from '../templates/color-card.hbs';
import colorCardsTpl from '../templates/color-cards.hbs';
import colors from '../js/colors.json';
import '../css/common.css';
import '../css/colorpicker.css';

// '<div>{{ name }}</div>'

// // это упрощенный вариант написания шаблонизации
// const template = SuperTemplatingEngine.compile('<div>{{ name }}</div>')
// console.log(template({ name: 'Mango'}))

// // То что мы писали выше, под капотом это вот это
// function template(data){
//     return `<div>${data.name}</div>`
// }

 

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  // return colors.map(color => colorCardTpl(color)).join('');
  // return colors.map(colorCardTpl).join('');

  return colorCardsTpl(colors);
}

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}